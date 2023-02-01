const connect = require('../sqlConnect')

const mysql = require('mysql2/promise');
const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    
    // insecureAuth: true,
})

function getCostumers(req,res){
    console.log('in costumers util');
    conn.then(conn => {
        conn.execute('select * FROM costumers').then(data => {
            console.log(data[0]);
            res.send(data[0][0])
        })
    })
    
    
}


exports.getCostumers = getCostumers