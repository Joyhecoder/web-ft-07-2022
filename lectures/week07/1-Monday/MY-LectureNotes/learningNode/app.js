
// build a server and turn it on

//importing core module from node.js library
const http = require('http');
const cow = require('cowsay');
const superhero= require('superheroes');

console.log(superhero.random());

console.log(cow.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));



let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]


//setup a server
const server = http.createServer((request, response)=>{

    // console.log(request.url);

    switch(request.url){
        case '/':  //home page localhost:3000

            response.setHeader('Content-Type', 'text/html') //letting the cliend know we are sending html back 
            response.end(`<h1> Hello World</h1>`)
            break;


        case '/api': //localhost: 3000/api

            response.setHeader('Content-Type', 'application/json') //sending json data to client
            let studentsJson = JSON.stringify(students)
            response.end(studentsJson)
            break;


        default:
            break;
    }

})


//turn our server on
//localhost:3000
// server.listen(3000, ()=>{

//     console.log(`Server is running on port 3000`);
// })