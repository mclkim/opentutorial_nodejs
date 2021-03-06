var express = require('express');
var session = require('express-session');
var OrientoStore = require('connect-oriento')(session);
var bodyParser = require('body-parser');
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var Oriento = require('oriento');
var server = Oriento({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: '111111'
});
var db = server.use('o2');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'qgqhgdgwhregsg1234',
    resave: false,
    saveUninitialized: true,
    store: new OrientoStore({
        server: "host=localhost&port=2424&username=root&password=111111&db=o2"
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/count', function(req, res) {
    if(req.session.count) {
        req.session.count++;
    }else {
        req.session.count = 1;
    }
    res.send('count : ' + req.session.count);
});
var users = [
    {
        authId:'local:egoing',
        username:'egoing',
        password:'Xa91Q+CEiTIfYMi79r6u/747LPCaEWuEhJIT1pDtEk/jUwORbZQJjoS7M+haevryym92UX4IP+hzS+ifIYbi3+w0h+tQC3SV+N+26uRnGzemkbTTJOZmNPohntYtkL0m/u99+ApysDVOXlHIo8MD9cUYtf3eawicBIWeSP+nIIg=',
        salt:'1waYPxoH4MIU4qYFGFEmUM0Hd6NOhE2njR52PNAdmzbnYHU6K/pOwDpSsHu+x4CHjl8tWngurRMl3NVfkZQXFA==',
        displayName:'Egoing'
    }
];
app.post('/auth/register', function(req, res) {
    hasher({password:req.body.password}, function(err, pass, salt, hash) {    
        console.log(err, pass, salt, hash);
        var user = {
            authId:'local:' + req.body.username,
            username:req.body.username,            
            password:hash,
            salt:salt,
            displayName:req.body.displayName        
        };
        var sql = "INSERT INTO user (authId, username, password, salt, displayName) VALUES(:authId, :username, :password, :salt, :displayName)";
        db.query(sql, {
            params: user
        }).then(function(results) {
            req.login(user, function(err) {
                req.session.displayName = req.body.displayName;
                req.session.save(function() {      
                    res.redirect('/welcome');      
                }); 
            });
        }, function(error) {
            console.log(error);
            res.status(500);
        });

    });
});
app.get('/auth/register', function(req, res) {
    var output = `
    <h1>Register</h1>
    <form action='/auth/register' method='post'>
        <p>
            <input type="text" name="username" placeholder="username">       
        </p>
        <p>
            <input type="password" name="password" placeholder="password">
        </p>
        <p>
            <input type="text" name="displayName" placeholder="displayName">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>
    `
    res.send(output);
});
app.get('/auth/logout', function(req, res) {
    req.logout();
    req.session.save(function() {
        res.redirect('/welcome');
    })
});
app.get('/welcome', function(req, res) {
    if(req.user && req.user.displayName) {
        res.send(`
            <h1>Hello, ${req.user.displayName} </h1>
            <a href="/auth/logout">logout</a>
        `);        
    }else {
        res.send(`
            <h1>Welcome</h1>
            <ul>
                <li><a href='/auth/login'>Login</a></li>
                <li><a href='/auth/register'>Register</a></li>            
            </ul>
        `);
    }
});
passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user.authId);
});
passport.deserializeUser(function(id, done) {
    var sql = 'SELECT * FROM user WHERE authId=:authId';
    db.query(sql, {params:{authId:id}}).then(function(results) {
        if(results.length === 0) {
            done('There is no user.');
        }else {
            return done(null, results[0]);
        }
    });
});
passport.use(new LocalStrategy(
    function(username, password, done) {
        var uname = username;
        var pwd = password;
        var sql = 'SELECT * FROM user WHERE authId=:authId';
        db.query(sql, {params:{authId:'local:'+uname}}).then(function(results) {
            if(results.length === 0) {
                return done(null, false);
            }
            var user = results[0];            
            return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash) {
                if(hash == user.password) {
                    console.log('LocalStrategy', user);
                    done(null, user);
                }else {
                    done(null, false);
                }
            });
        });
    }
));
passport.use(new FacebookStrategy({
    clientID: '100362483739670',
    clientSecret: '65b127d947e7ba48e411d79fb68b637b',
    callbackURL: "/auth/facebook/callback",
    profileFields:['id', 'email', 'gender', 'link', 'locale',
    'name', 'timezone', 'updated_time', 'verified', 'displayName']
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      var authId = 'facebook:'+profile.id;
      var sql = 'SELECT FROM user WHERE authId=:authId';
      db.query(sql, {params:{authId:authId}}).then(function(results) {
          if(results.length === 0) {
                var newuser = {
                    authId: authId,
                    displayName : profile.displayName,
                    email:profile.emails[0].value
                }
                var sql = 'INSERT INTO user (authId, displayName, email) VALUES (:authId, :displayName, :email)';
                db.query(sql, {params:newuser}).then(function() {
                    done(null, newuser);
                }, function(error) {
                    console.log(error);
                    done('Error');    
                });
          }else {
              return done(null, results[0]);
          }
      });
  }
));
app.post(
    '/auth/login', 
    passport.authenticate(
        'local', 
        { 
            successRedirect: '/welcome',
            failureRedirect: '/auth/login',
            failureFlash: false 
        }
    )
);
app.get(
    '/auth/facebook',
     passport.authenticate(
         'facebook',
         {scope:'email'}
     )
);
app.get(
    '/auth/facebook/callback',
    passport.authenticate(
        'facebook',
        {
            successRedirect: '/welcome',
            failureRedirect: '/auth/login' 
        }
    )
);
app.get('/auth/login', function(req, res) {
    var output = `
    <h1> Login </h1>
    <form action="/auth/login" method="post">
        <p>
            <input type="text" name="username" placeholder="username">       
        </p>
        <p>
            <input type="password" name="password" placeholder="password">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>
    <a href="/auth/facebook">facebook</a>
    `;    
    res.send(output);
});
app.listen(3003, function() {
    console.log('Connected 3003 port !!!');
});