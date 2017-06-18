const express = require('express')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()


//insert your URI from mongodb here - this connects the DB and the Server
mongoose.connect('mongodb://w4ng:1bigpanda@clustersrevenge-shard-00-00-z110i.mongodb.net:27017,clustersrevenge-shard-00-01-z110i.mongodb.net:27017,clustersrevenge-shard-00-02-z110i.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClustersRevenge-shard-0&authSource=admin')


const Pokemon = require('./models/Pokemon.js')

//testing new instance
let pikachu = new Pokemon ({
  name: 'Pika',
  type: 'Electric'
})

//need to save it and create a record
pikachu.save()

console.log( pikachu );

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', ( req, res ) => {
  res.render('index')
})

app.get ('/pokemon/new', ( req, res ) => {
  res.render('pokemon/new')
})


app.get ('/pokemon', ( req, res ) => {

  Pokemon.find( {}, ( err, pokemon) {}
  res.render ('pokemon.index', { pokemon: pokemon})

})

app.post ('/pokemon/new', ( req, res ) => {
  //if someone submits this form...
  //we want to create a new entry
  //save to db
  //redirect user

  //redirect sends people to another url
  res.redirect('/pokemon')

})

app.listen(3000)
