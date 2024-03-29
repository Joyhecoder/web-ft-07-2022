const express = require('express')
const router = express.Router() //sub route

router.get('/', (req, res) => {
    // res.send('Home Page')
    res.render('index', {
        firstName: "Joy",
        lastName: "He",
        year: 2022,
        nums: [1, 2, 3, 4],
        contacts: {year: 2022}
    })  //rendering a view (template)
    //the second argument of render is how we pass information to our template
    //strings, int, bool, objects, arrays, functions
    
})

module.exports = router