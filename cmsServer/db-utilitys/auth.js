const connect = require('../sqlConnect').connect
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// ------------------ declerations ------------------
const saltRounds = 10;

async function checkPasswordMatch(plainPass, hashPass) {
    return await bcrypt.compare(plainPass,hashPass)   
}

function makeConnection(){
    // connection to remote db server with connection timeout have to connect for each request
    // will use pooling in the future

    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    return conn
}

// function makeConnection(){
//     const conn = mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root',
//         database: 'cmsHackeru',
//         password: '',
//     })

//     return conn
// }

function login (req,res,next){

    const conn = makeConnection()
    conn.then((conn) => {
        conn.execute('select id,email,password FROM users where email=?',[req.body.email]).then((data) => {     
            checkPasswordMatch(req.body.password, data[0][0]['password']).then(match => {
                if(match) {
                        req.session.user = data[0][0]       
                        return res.json({"isLogged":true,})
                            
                    } else {
                        return res.json({"isLogged":false,"message":"wrong password"})                
                    }
            })  
        }).catch(err => {
            res.json({message:"Email Does Not Exist"})           
        })
        conn.end()
    })  
}

function signup(req,res) {
    bcrypt.genSalt(saltRounds, (err,salt) => {
        bcrypt.hash(req.body.password, salt, (err,hash) =>{ 
            const conn = makeConnection()
            conn.then((conn) =>{
            let query = `INSERT INTO users (email,password) values ('${req.body.email}','${hash}')`
                conn.execute(query).then(data => {
                    res.json({message:"registered"})
                }).catch((err) => {
                    res.json({message:"Email already exist's"})    
                })     
            })
            conn.then(conn => {
                conn.end()
            })
        })
    })
    
}

function logout(req,res,next){ 
   req.session.destroy()   
   res.send()
}

function isAuthenticated (req, res, next) {
    
    if(!req.session.user){
        return res.json({"isLogged":false})
    }
    if(req.session.user){
        return res.json({"isLogged":true})
    }
}


exports.isAuthenticated = isAuthenticated
exports.login = login
exports.logout = logout
exports.signup = signup