const express = require('express');
const app = express();

app.use(logger)


app.get('/', (req, res, next) => {

    console.log('inside of route');
    console.log(req.mySession);
    res.send('home page');
    next()
})



app.get('/admin', (req, res) => {

    console.log('inside of route');
    res.send('home page')
})


app.use(admin)

//middleware function
function logger(req, res, next){

    req.mySession = "Joy"
    console.log("Log");
    next()
}

function admin(req, res, next){
    console.log('inside the admin function');
    next()
}

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})