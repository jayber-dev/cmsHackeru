const connect = require('../sqlConnect').connect
const mysql = require('mysql2/promise');


function login (req,res,next){
    // connection to remote db server with connection timeout have to connect for each request
    // will use pooling in the future
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        
        // insecureAuth: true,
    })
    conn.then((conn) => {
        console.log('in login');
        conn.execute('select id,email,password FROM users where email=?',[req.body.email]).then((data) => {
           
            if(data[0][0]['password'] == req.body.password) {
                req.session.user = data[0][0]       
                return res.json({"isLogged":true,})
                    
            } else {
                return res.json({"isLogged":false,"message":"wrong password"})                
            }
            
        })
        conn.end()
    })
    
}

function signup() {

}

function routeGuard(){

}

function logout(req,res,next){
    console.log('im in logout');
    
   req.session.destroy()
   console.log(req.session);
   
   res.send()
}

function isAuthenticated (req, res, next) {
    console.log("in is auth");
    console.log(req.session.user);
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