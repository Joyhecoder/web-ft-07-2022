const express = require('express')
const router = express.Router()

router.get('/aboutus', (req, res) => {
    res.send('About us page')
    
})

module.exports = router