//main server for hw

//initialize express
const express = require ('express')
const app = express()

//initialize handlebars
const hbs = require('express-handlebars')

//set view engine for handlebars
app.set ('view engine', 'handlebars')

//set defaultLayout to main hbs view
app.engine('handlebars', hbs({defaultLayout: 'main'}))


//create route to respond to client and pass in data
app.get ('/', function( req, res ) {

  // Read database by searching for anything that matches the schema
  TodoItem.find( {}, function ( err, todoList) {

    // Render the page, passing in the database data
    res.render('home', { todoList })
  })
})

//above renders home page when '/' root is requested. How do i render or reference the database?


//NEXT TO DO CREATE A BUNCH OF ROUTES FOR THE URLS - HANDLEBARS HTML LINKS WILL REFLECT THESE PATHS TOO. REF THE EXERCISE FROM CLASS


//listen for requests on port 3000
app.listen(3000, function () {
  console.log( 'Listening on 3000');
})

// initialize mongoose to connect to mongodb
const mongoose = require ('mongoose')

//you need this to parse bodies
const bodyParser = require ('body-parser')

//set URI for database
mongoose.connect('mongodb://w4ng:1bigpanda@clustersrevenge-shard-00-00-z110i.mongodb.net:27017,clustersrevenge-shard-00-01-z110i.mongodb.net:27017,clustersrevenge-shard-00-02-z110i.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClustersRevenge-shard-0&authSource=admin')

//not sure what this is
app.use (bodyParser.urlencoded({
  extended: true
}))

//define models and schema to interact with Database 37 - 45 needs to be in a separate file. you need a file for each scema under models

// const Schema = mongoose.Schema
//
// //schemas define the data types that go into it that will be used to verify data while its instantiated?
//
// const todoItem = new Schema ({
//   title: String
//   isComplete: Boolean
//
// })



// now require the jS file from the models folder
const Entry = require ('./models/todo.js')

// reference schema to create something
const taskOne = new Entry ({
  title: 'My first task',
  isComplete: false

})

// save the new object to the database
taskOne.save

// confirming it works + it has unique iD
console.log('logging taskOne obj ' + taskOne);
