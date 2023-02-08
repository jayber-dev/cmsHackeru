const express = require('express');
const costumersUtil = require('../../db-utilitys/costumers')
const costumers = express.Router()

costumers.use((req, res, next) => {
    next()
})
costumers.get('/',costumersUtil.getCostumers, (req,res) => {  
    // return res.json(req.body)
})

costumers.get('/costumer/:id', costumersUtil.getSingleCostumer,(req,res,next) =>{})

costumers.get('/search/:query',costumersUtil.findCostumer, (req,res) => {})

costumers.post('/addCostumer',costumersUtil.addCostumer,(req,res) => {})

costumers.post('/editCostumer',costumersUtil.editCostumer,(req,res) => {})

costumers.delete('/deleteCostumer/:id',costumersUtil.deleteCostumer, (req,res) =>{
        
})
module.exports = costumers;