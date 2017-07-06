let express = require('express')
let data    = require('./pokedex.json')

function getPokemon( id ) {
  return data.pokemon.find(poke => {
    return poke.id === id
  })
}

let app = express()

app.get('/', function(req, res){
  // send a json response letting people know they're looking at the PokeApi
  res.json ({ 'message': 'Welcome to the Pokede API' })
})

app.get('/pokemon', function( req, res ) {
  // send a json response containing all pokemon
  //pass in an object
  res.json ( data )
})

app.get('/pokemon/:id', function( req, res ) {
  // send a json response containing the pokemon with the given Id
  let pokemon = getPokemon (req.params.id )
  res.json ( pokemon )

})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
