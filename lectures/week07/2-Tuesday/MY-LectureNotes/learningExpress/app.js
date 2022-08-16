const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res)=>{
    res.send('<h2>This is the homepage</h2>')
})

app.get('/bat(wo)?man', (req, res)=>{

    res.send('batpeople')
})

//localhost:3000/thecat
//localhost:3000/thecats
//localhost:3000/thefancycat
//localhost:3000/thefancycats
app.get('/the(fancy)?cats?', (req, res)=>{
    res.send('cats')
})

app.get('/aboutus', (req, res)=>{
    res.send('<h4>Do you want to know more about us</h4>')
})


//localhost:3000/name?fname=joy&lname=he&city=Houston
app.get('/name', (req, res)=>{

    let firstName = req.query.fname
    let lastName = req.query.lname
    let city = req.query.city
    res.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
})


//localhost:3000/contact/Joy/He
app.get('/contact/:fname/:lastName', (req, res)=>{
    let {fname, lastName} = req.params
    res.send(`<h1>${fname} ${lastName}</h1>`)

})

//calculator 
//localhost:3000/calc/4/5/*
app.get('/calc/:num1/:num2/:oper', (req, res)=>{
    let num1= parseInt(req.params.num1);
    let num2= parseInt(req.params.num2);
    let oper = req.params.oper
    let result;
    switch(oper){
        case '+':
            result =num1+num2
            break;
        case '-':
            result=num1-num2
            break;
        case '*':
            result= num1*num2
            break;
        case 'divide':
            result = num1/num2
    }
   
    res.send(`<h1>${num1} ${oper} ${num2} is equal to ${result}</h1>`)

})






let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}


//localhost:3000/dog
app.get('/dog',(req, res)=>{

    let htmlFragmet =""
    let dogsArr = data.data
    dogsArr.forEach((val)=>{
        htmlFragmet += `
        <a href="/dogs/${val.id}"><h1>${val.name}</h1></a>
        <a href="/dogs/${val.id}"><img src="${val.img}" width="400px"></a>
        `

    })
    res.send(htmlFragmet)
})


//localhost:3000/dogs/3
app.get('/dogs/:id', (req, res)=>{


    let id = req.params.id;
    let name = data.data[id].name
    let img = data.data[id].img
    res.send(`
    
    <h1>${name}</h1>
    <ul>
            <li><a href="/dog"> Home</a></li>
            <li><a href="/dogs/0"> Golden Retriever</a></li>
            <li><a href="/dogs/1"> Lab</a></li>
            <li><a href="/dogs/2"> Pug</a></li>
            <li><a href="/dogs/3"> Poodle</a></li>

        </ul>
    <img src="${img}" width= "400px">`)
})








