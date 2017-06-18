var express = require('express')
var hbs = require('express-handlebars')

//bridge the server and db with mongoose
const mongoose = require('mongoose')

//you need this to parse bodies
const bodyParser = require ('body-parser')

//defines the connection
mongoose.connect ('mongodb://w4ng:1bigpanda@clustersrevenge-shard-00-00-z110i.mongodb.net:27017,clustersrevenge-shard-00-01-z110i.mongodb.net:27017,clustersrevenge-shard-00-02-z110i.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClustersRevenge-shard-0&authSource=admin')

//import the export module of our model
const Entry = require('./models/entry.js')

var app = express()

app.use (bodyParser.urlencoded({
  extended: true
}))

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  //just renders the home template
  // res.render('home')

  //how do i search the DB and get records back - objet reps query. insert empty item
  //empty query returns all things
  Entry.find({ }, function ( err, entries ) {

    //output this now in handlebars
    res.render('home', { entries })

  })


})

app.post('/', function( req, res ) {
  //this information gets submitted as our "body" data - and submitted it to the route
  //this has the content of the form, of the req objet
  //pass in a new object, the actual entry from the form - this is an instance but not yet in the db
  const currentEntry = new Entry({
    content: req.body.contentname,
    name: req.body.name
  })

  //this pushes it from our server and inserts it into our database
  currentEntry.save

  //redirects user to homepage
  res.redirect('/')

})

app.get('*', function( req, res ){
  res.send('404!')
})

app.listen( 3000, function() {
  console.log( 'Guestbook is up and running!' )
})
