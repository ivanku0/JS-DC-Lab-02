const express = require('express')
const Post = require('../models/pokemon.js')
const viewRouter = express.Router()

// appRouter.get('/', ( req , res ) => {
//
//   Pokemon.find({}, function ( err, pokeParty) {
//
//         res.render('index', { pokeParty } )
//
//     })
//
//   })


  viewRouter.get('/viewpokemon/:name', ( req, res ) => {

    // Artist.findOne({ 'name': req.params.id }, ( err, artist ) => {
    //
    //   console.log( artist )

      res.render('viewpokemon/pokemondetails')
    })


      viewRouter.get('/viewpokemon/mew', ( req, res ) => {

        // Artist.findOne({ 'name': req.params.id }, ( err, artist ) => {
        //
        //   console.log( artist )

          res.render('viewpokemon/pokemondetails')
        })











module.exports = viewRouter
