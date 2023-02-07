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
       
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    
    query = `select * FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 
}

function findCostumer(req,res){
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    console.log(req.params.query);
    console.log(req.query.from);
    query = `select * FROM costumers WHERE first_name LIKE '%${req.params.query}%' ORDER BY first_name LIMIT 15 OFFSET ${req.query.from}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        console.log(row);
        
        res.json(row)   
    })
    conn.end() 
}

function deleteCostumer(req,res) {
    console.log('in delete');
    
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    query = `DELETE FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 

}

exports.deleteCostumer = deleteCostumer
exports.getCostumers = getCostumers
exports.getSingleCostumer = getSingleCostumer
exports.findCostumer = findCostumer