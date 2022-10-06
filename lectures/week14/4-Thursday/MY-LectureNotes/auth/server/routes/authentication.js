const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple')  //from install jwt-simple
const secrets = require('../secrets');
const db = require('../models')
const bcrypt = require('bcryptjs'); //used to encrypt password

const passport = require('passport');
//must initialize passport for it to work
router.use(passport.initialize())

//import all the passauth code
require('../auth/passAuth')

router.use(express.urlencoded({extended: false})) // scrape email and pwd from request header 
router.use(express.json())  //req.body

//*call authenticate method on passport instance
//* this is our gatekeeper middleware
let requireLogin = passport.authenticate('local', {session:false})
let requireJwt = passport.authenticate('jwt', {session:false})

//this function returns a JWT
// {id, email, password, createdAt, updatedAt}

const token = (userRecord) => {
    let timestamp = new Date().getTime(); //current time in ms
    return jwt.encode({sub:userRecord.id, iat:timestamp}, secrets.secrets)
}
// console.log(token({id:1}));

router.get('/', (req, res)=>{
    res.send('Hello World')
})

//when react sends us info from its form, we're going 
//1. register user
//2. send back a jwt
router.post('/register', async (req, res)=>{
    //collected info from the header

    //email, password
    let {email, password} = req.body;
    try {
        //check to see if user is already in database
        let records = await db.users.findAll({where: {email}}) //[{}, {}]
        if(records.length == 0){
            //record does not exit yet, create a new user
         

            //encrypt password
            password = bcrypt.hashSync(password, 8)

            //create db entry
            let insertRecord = await db.users.create({
                email,
                password
            })
            //create jwt
            let jwtToken = token(insertRecord)
            //return jwt
            return res.json({token: jwtToken})
        }else{
            //user's email already exists in db, so send back an error message to react
            return res.status(422).json({error: "Email already exists"})
        }
    } catch (error) {
        //can't access db
        return res.status(432).json({error: "can't access database"})
    }
})

router.post('/login', requireLogin, (req, res)=>{
    //req.user
    res.json({token: token(req.user)})
})

router.get('/protected', requireJwt, (req, res)=>{
    res.json({isValid: true})
})

module.exports = router