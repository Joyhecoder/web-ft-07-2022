const express = require('express')
const router = express.Router()

router.get('/faq', (req, res) => {
    res.send("Frequent Ask Question Page")
    
})

module.exports = router