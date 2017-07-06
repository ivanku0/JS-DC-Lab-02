var express = require("express")
var mongoose = require("mongoose")
var hbs = require('express-handlebars')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var passport = require ('passport')
var routes = require('./routes/index')

//Strategy is a way of authenticating users.
var LocalStrategy = require ('passport-local').Strategy

//Maintains sessions - key value pairs are stored in sessions including keys
var session = require('express-session')



var app = express()
mongoose.connect("mongodb://w4ng:1bigpanda@clustersrevenge-shard-00-00-z110i.mongodb.net:27017,clustersrevenge-shard-00-01-z110i.mongodb.net:27017,clustersrevenge-shard-00-02-z110i.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClustersRevenge-shard-0&authSource=admin")

app.engine('handlebars', hbs({
  defaultLayout: 'default',
  helpers: { //extensile handlebars!
    equal: function(lvalue, rvalue, options) {
        if (arguments.length < 3)
            throw new Error("Handlebars Helper equal needs 2 parameters")
        if( lvalue!=rvalue ) {
            return options.inverse(this)
        } else {
            return options.fn(this)
        }
    }
  }
}))

app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session ({
  //manages session - any random string
  secret: 'TaylorGodSwifty',
  //resave means we won't resave credentials on every request
  resave: false,
  //only saves completed logins
  saveUninitialized: false
}))

//get passport in and sets it up, after its been initialized
app.use(passport.initialize())

//tells express to use passport.session's functionality. now it will check sessions for logins
app.use(passport.session())




//now configure passport with user model
const User = require ('./models/user')

//define the strategy to use
passport.use(new LocalStrategy (User.authenticate()))

//passes some method inside the passport, this serizes/deserializes passwords to keep it scure
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())





app.use('/', routes)


app.listen(3000, function() {
  console.log("Server started on port 3000")
})
