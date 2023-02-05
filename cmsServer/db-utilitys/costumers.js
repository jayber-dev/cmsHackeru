const connect = require('../sqlConnect')

const mysql = require('mysql2');

function getCostumers(req,res){

    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    query = `select * FROM costumers ORDER BY first_name LIMIT 15 OFFSET ${req.query.from}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row)   
    })
    conn.end()  
}

function getSingleCostumer(req,res){
    console.log('in get costumer func');
    
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    console.log(req.params);
    
    query = `select * FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 
}


exports.getCostumers = getCostumers
exports.getSingleCostumer = getSingleCostumer