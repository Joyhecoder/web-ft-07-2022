const express = require('express');
const app = express();

const cookieSession = require('cookie-session');

let port = 3000;

//install cookieSession

//client => req => middle func(req, res, next) => res => client


app.use(cookieSession({
    name: 'session',
    keys: ['alkdjsklejivkg'],
    maxAge: 14 * 24 * 60 * 60 * 1000     //14 days in miliseconds 
}))

//req.session

app.get('/', (req, res) => {
    req.session.fName = "Joy"   //place this on the cookie
    res.send('home page')
})


app.get('/protected', (req, res) => {

    res.send(`protected ${req.session.fName}`)
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})