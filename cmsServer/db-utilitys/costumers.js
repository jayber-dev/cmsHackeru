const connect = require('../sqlConnect')

const mysql = require('mysql2');


function getCostumers(req,res){
    console.log(req.params)
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        
        // insecureAuth: true,
    })

    data = conn.execute('select * FROM costumers ORDER BY first_name LIMIT 20 OFFSET 20', (err,row,fields) => {
        if (err) console.log(err);
        res.json(row)
        conn.end()
    })
    
    
    
    
    

    
    
}


exports.getCostumers = getCostumers