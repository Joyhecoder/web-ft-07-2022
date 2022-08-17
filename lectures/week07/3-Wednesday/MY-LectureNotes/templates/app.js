
const port = 3000
const express = require('express');
const app = express();

//setting up a foler that holds static resources
app.use(express.static('public')) //hold all of our static resources

//configuring ejs to work with application
app.set('view engine', 'ejs') //telling express what templating engine you're using

// app.set('views', 'myviews') //maps default views name to something else


app.use(require('./routes/index'))
// app.get('/', (req, res)=>{
//     res.send('Hello World')
// })


app.use(require('./routes/aboutus'))
// app.get('/aboutus', (req, res)=>{
//     res.send('About us')
// })


app.use(require('./routes/faq'))
// app.get('/faq', (req, res)=>{
//     res.send('faq')
// })

app.use(require('./routes/city'))


//turn on server
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})

