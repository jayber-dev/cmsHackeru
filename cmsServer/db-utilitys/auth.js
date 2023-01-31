let session = require('express-session');

// const session = require('express-session');
const connect = require('../sqlConnect').connect



function login (req,res,next){
    session=req.session
    // console.log(req);
    // connection to remote db server with connection timeout have to connect for each request
    // will use pooling in the future
    // req.session.viewCount += 1
    const conn = connect()
    conn.then((conn) => {
        console.log('in login');
        conn.execute('select id,email,password FROM users where email=?',[req.body.email]).then((data) => {
           
            if(data[0][0]['password'] == req.body.password) {
                session.userId = data[0][0]       
                console.log(req.session);        
                // console.log(req.session['user'] = user);
                
                return res.json({
                    "isLogged":true,
                    "session": req.session.user})
                    
            } else {
                return res.json({"isLogged":false})                
            }
        })
    })
}

function signup() {

}

function routeGuard(){

}

function logout(req,res,next){
    req.session.user = ''
}

function isAuthenticated (req, res, next) {
    // console.log(req);
    console.log(req.session.user)
    // if (req.session.user) {
    //     res.json({"isLogged": true}) 
       
    // }
    // else res.json({"isLogged": false})
  }

exports.isAuthenticated = isAuthenticated
exports.login = login
exports.logout = logout