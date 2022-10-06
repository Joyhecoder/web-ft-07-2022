const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; //local strategy
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

//access db
const db = require('../models'); //access to all models in the db

//bcrypt
const bcrypt = require('bcryptjs');

//secret file for JWT
const secrets = require('../secrets');

/**
 * Local Strategy
 * *Determine if user email and pasword are correct by checking what's inside of db
 */

let options ={
    usernameField: 'email'
}
let localLogin = new LocalStrategy(options, async (email, password, done)=>{
    try {
        //check if email is in our db
        let records = await db.users.findAll({where: {email}})  //[{}, {}]
        if(records !== null){
            //if the email was found, check the password
            // bcrypt.compare($1,$2,$3)
            bcrypt.compare(password,records[0].password, (err, isMatch)=>{
                if(err){ //if the error is not null, there is an error
                    return done(err) 
                }

                if(!isMatch){
                    return done(null, false) //no auth because password did not match
                }

                return done(null, records[0])  //match was found, send record
                //req.user
            })
        }else{
            //no email was found

            //exit with no error
            return done(null, false)
        }
    } catch (error) {
        //can't access database
        return done(error)
    }
})

/**
 * JWT strategy
 * *check to see if token is valid
 */

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secrets.secrets
}

let jwtLgoin = new JwtStrategy(jwtOptions, async(payload, done)=>{
    //id
    try {
        let userID = payload.sub

        //check if user is in db

        let user = await db.users.findByPk(userID); //{} or null
        if(user){
            return done(null, user) //place the user object on req.user
            //req.user = {id, email, password}
        }
        else{
            // no user found
            return done(null, false)
        }
    } catch (error) {
        //error reading db
        return done(error)
    }
})

//add strategies to middleware chain
passport.use(localLogin);
passport.use(jwtLgoin);