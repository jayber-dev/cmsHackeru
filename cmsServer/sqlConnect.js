const mysql = require('mysql2/promise');

// require('dotenv').config();

// console.log('im in models');


conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        
        // insecureAuth: true,
    })
    

exports.connect = conn