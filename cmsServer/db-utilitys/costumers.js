const connect = require('../sqlConnect')

const mysql = require('mysql2');
let costumersData = []
let recordsCount = 0
function getCostumers(req,res){
    
    // console.log(req.params)
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        
        // insecureAuth: true,
    })

    console.log(req.query.from);
    query = `select * FROM costumers ORDER BY id LIMIT 15 OFFSET ${req.query.from}`
    conn.execute(query, (err,row,fields) => {
        
        if (err) console.log(err);
        // console.log(row);
        console.log(row);
        
        costumersData = row
        // console.log(costumersData);
        
    })
    
    conn.execute('select COUNT(id) as countNumber from costumers', (err,data) => {
        recordsCount = data
        
    })
    conn.end()
    console.log(recordsCount[0]);
    
    // console.log(costumersData.push(recordsCount));
    res.status(200).json({costumersData, "rowCount":recordsCount[0]})
    
    
}


exports.getCostumers = getCostumers