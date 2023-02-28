const express = require('express');
const costumersUtil = require('../../db-utilitys/costumers')
const auth = require('../../db-utilitys/auth')
const costumers = express.Router()

costumers.use((req, res, next) => {
    next()
})
costumers.get('/', auth.authGuard, costumersUtil.getCostumers, (req, res) => { })

costumers.get('/getAll', auth.authGuard, costumersUtil.getAllCostumers, (req, res) => { })

costumers.get('/costumer/:id', auth.authGuard, costumersUtil.getSingleCostumer, (req, res, next) => { })

costumers.get('/search/:query/:searchParam', auth.authGuard, costumersUtil.findCostumer, (req, res) => { })

costumers.post('/addCostumer', auth.authGuard, costumersUtil.addCostumer, (req, res) => { })

costumers.post('/editCostumer', auth.authGuard, costumersUtil.editCostumer, (req, res) => { })

costumers.delete('/deleteCostumer/:id', auth.authGuard, costumersUtil.deleteCostumer, (req, res) => {

})
module.exports = costumers;