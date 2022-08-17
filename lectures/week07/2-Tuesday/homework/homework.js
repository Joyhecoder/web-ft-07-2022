const port = 3000;
const express= require('express');
const app = express();

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);

})


//1. Hello World
app.get('/', (req, res)=>{
    res.send('Hello, world!')
})

//2. Routes
app.get('/cats', (req, res)=>{
    res.send(`<h1>Meow</h1>`)
})
app.get('/dogs', (req, res)=>{
    res.send(`<h1>Woof</h1>`)
})
app.get('/cats_and_dogs', (req, res)=>{
    res.send(`<h1>Living together</h1>`)
})

//3.Route Parameters
//localhost:3000/greet/Joy
app.get('/greet/:name', (req, res)=>{
    let name = req.params.name
    res.send(`<h1>Hello, ${name}!</h1>`)
})

//4. Query Parameters: Tell the year you were born
//localhost:3000/year?age=32
app.get('/year', (req,res)=>{
    let age = req.query.age
    let year = 2022 - age
    res.send(`<h1>You were born in ${year}.</h1> <br><h2>You are ${age} years old in 2022.</h2>`)
})