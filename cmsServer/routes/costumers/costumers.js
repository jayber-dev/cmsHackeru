const express = require('express');
const costumers = express.Router()

costumers.use((req, res, next) => {
    next()
})
costumers.get('/',(req,res) => {
    console.log('in login');
    
    
    return res.json(req.body)
})



module.exports = costumers;