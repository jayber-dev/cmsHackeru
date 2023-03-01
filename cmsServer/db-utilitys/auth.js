const connect = require('../sqlConnect').connect
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const crypto = require("crypto-js");


// ------------------ declerations ------------------
const saltRounds = 10;

async function checkPasswordMatch(plainPass, hashPass) {
    return await bcrypt.compare(plainPass,hashPass)   
}

function encryptToken(userData){
    
    toEncrypt = {
        id:userData.id,
        email:userData.email
    }
    return crypto.AES.encrypt(JSON.stringify(userData), process.env.SECRET_KEY).toString()
}

function decryptToken(cipher){
    bytes  = crypto.AES.decrypt(cipher, process.env.SECRET_KEY);
    return JSON.parse(bytes.toString(crypto.enc.Utf8));
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

// function authGuard(req, res, next) {
//     console.log("in auth guard");
//     console.log(req.session.user);
//     if(!req.session.user) {
//         res.sendStatus(401);
//     } else{
//         next();
//     }
   
// }


function login (req,res,next){
    const conn = makeConnection()
    conn.then((conn) => {
        conn.execute('select id,email,password FROM users where email=?',[req.body.email]).then((data) => {     
            checkPasswordMatch(req.body.password, data[0][0]['password']).then(match => {
                if(match) {
                    const token = encryptToken(data[0][0])       
                    const query = `UPDATE users SET token='${token}' WHERE id=${data[0][0]['id']}`
                    conn.execute(query).then((row,fields) =>{                       
                        res.json({"isLogged":true,"t":token})
                    }).catch(err => {
                        if (err) console.log(err);
                        
                    }) 
                          
                } else {
                    res.json({"isLogged":false,"message":"wrong password"})                
                }
            }).catch(err =>{
                if (err) console.log(err);
                
            })  
        }).catch(err => {
            res.json({message:"Email Does Not Exist"})           
        })
        
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
    res.send({"isLogged":false,})
}

function isAuthenticated (req, res, next) {
    
    token = decryptToken(req.body.t)
    console.log(token);

    const conn = makeConnection()
    conn.then(conn => {
        const query = `SELECT * FROM users WHERE id=${token['id']}`
        conn.execute(query).then(result =>{
            console.log(result[0][0]);
            if(result[0][0]){
                return res.json({"isLogged":true})
            }
        }).catch(err => {
            console.log(err);
            if(!req.session.user){
                return res.json({"isLogged":false})
            }
        })
    })
    
    
}


exports.isAuthenticated = isAuthenticated
exports.login = login
exports.logout = logout
exports.signup = signup