//schema lives in mongoose
const mongoose = require('mongoose')

//Schema is a class representing a model
const Schema = mongoose.Schema

//Create instance of this class using new
const pokemonSchema = new.Schema ({

  //need to pass in an object into schema as well. define property, and type of data
  //scaffold for what we are defining here.
  name: String,
  type: String,

})

//sending pokemon object with pokemonSchema into DB
const Pokemon = mongoose.model('Pokemon', pokemonSchema)

// //testing new instance
// let pikachu = new Pokemon ({
//   name: 'Pika',
//   type: 'Electric'
// })
//
// //need to save it and create a record
// pikachu.save()

//be able to use this outside of this
module.exports = Pokemon
