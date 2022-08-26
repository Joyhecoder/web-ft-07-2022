const express = require('express');
const app = express();
let count = 0;

app.use(logger)

app.use(passport)  //isAuthenticated is going to be on the request object

app.get('/', (req, res, next) => {
    console.log('inside home page');
    res.send('home page');
    next()
})


//we want to protect dashboard
app.get('/dashboard', auth, (req, res, next) => {
    console.log('inside page 2');
    res.send('dashboard');
    next()
})

app.get('/error', (req, res) => {
    res.send('you are not authenticated. Please login or register')
})

function logger(req, res, next){

    count++;
    console.log('hello world');
    next()
}
app.use(goodBye)

function goodBye(req, res, next){
    console.log(`The count is ${count}, goodbye`);
    next()
}

function auth(req, res, next){

    if(req.isAuthenticated){
        return next();
    }
    res.redirect('/error')
}

function passport(req, res, next){

    req.isAuthenticated = true;
    next()
}


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})