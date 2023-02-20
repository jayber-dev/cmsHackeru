const mysql = require('mysql2/promise');

require('dotenv').config();

conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        
        // insecureAuth: true,
    })

// conn = mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root',
//         database: 'cmsHackeru',
//         password: '',
//         // insecureAuth: true,
//     })
    

exports.connect = conn