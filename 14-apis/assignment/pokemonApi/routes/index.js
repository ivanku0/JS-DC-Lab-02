const express = require('express')
const Pokemon = require('../models/pokemon.js')
const request = require('request');

const appRouter = express.Router()


//index route
appRouter.get('/', ( req , res ) => {

  Pokemon.find({}, function ( err, pokeParty) {

        res.render('index', { pokeParty } )

    })

  })

//post to server
appRouter.post('/', ( req , res ) => {
    //this gets the party ID name
    let partyName = req.body.party
    let pokeID = req.body.pokeID

    let url = `http://pokeapi.co/api/v2/pokemon/${pokeID}`

    request (url, function (err, response, body) {
      if (err) {
        res.render('index', {name: null, error: 'Error, please try again'})
      } else {
        let pokemonCall = JSON.parse(body)
        //displays name object of pokemon
        console.log('identifying ' + pokemonCall.name);

        if (pokemonCall.name == undefined) {
          res.render ('index', { name: null, error: 'big error, try again' })
        } else {

            let newPartyadditon = new Pokemon ({
              name: pokemonCall.name,
            })

            newPartyadditon.save ( function (err) {
              if (err) throw err;
            })

            let pokeConfirmation = `Success! Added ${pokemonCall.name} to the party`

            console.log(pokeConfirmation);
            //
            // res.render ('index')
            res.redirect('/')

        }

      }

    })

  })


module.exports = appRouter
