
//mvc model viewer controller
const express= require('express');
const app = express();


const db = require('./models/database');  //instance of our db connection

const port = 3000;

app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/newDish'));


// db.query('SELECT * FROM categories')
// .then(results =>{                      //should receive [{}, {}, {}]
//     console.log(results);
// })


const categories = async () =>{
    let results = await db.query('SELECT * FROM categories');

    //!for each method
    // results.forEach(e=>{
    //     console.log(e.name);
    // })

    //!for loop method
    // for(let i =0; i < results. length; i++){
    //     console.log(results[i].name);
    // }

    //!for of method
    for (let category of results){
        console.log(category.name);
    }
}

categories()

const insertCategoryItem = async (categoryName) => {
    // let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, '${categoryName}')`)


    //anitize our inserts
    let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, [categoryName])
    console.log(results);
}

// insertCategoryItem('Moroccan')

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})