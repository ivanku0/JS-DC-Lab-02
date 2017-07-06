//require dependencies
const express = require('express')
const bodyParser = require('body-parser')
const hbs  = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path');
const request = require('request');

//connect to db
mongoose.connect('mongodb://w4ng:1bigpanda@clustersrevenge-shard-00-00-z110i.mongodb.net:27017,clustersrevenge-shard-00-01-z110i.mongodb.net:27017,clustersrevenge-shard-00-02-z110i.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClustersRevenge-shard-0&authSource=admin')

//require models
const Pokemon = require ('./models/pokemon.js')

// // this works!
// const bulba = new Pokemon ({
//   name: 'Bulbasaurus-Rex',
//   type: 'Grass',
//   image: 'insert URL here',
//   description: 'has a flower for an ass'
//
// })
//
// bulba.save()

//displays all pokemon found in DB


Pokemon.find({}, function(err, pokemon) {
  if (err) throw err;

  // object of all the users
  console.log(pokemon);
}); 

// Pokemon.find({ name: 'Bulbasaurus-Rex' }, function(err, user) {
//   if (err) throw err;
//
//   // delete him
//   Pokemon.remove(function(err) {
//     if (err) throw err;
//
//     console.log('User successfully deleted!');
//   });
// });


//display controllers/routers
const appRouter = require('./routes/index.js');
const viewRouter = require ('./routes/viewpokemon.js')

//create the application
const app = express()

//update view engine
app.engine ('handlebars', hbs ({defaultLayout: 'main'}))
app.set ('view engine', 'handlebars' )

//serving static files like css
app.use (express.static ('public'))

//use bodyParser
app.use (bodyParser.urlencoded({extended: true}))

//app routes

app.use('/', appRouter)
app.use('/pokemon', viewRouter)

app.listen ( 3000, () => {

  console.log('listening on 3000, fam');

})
