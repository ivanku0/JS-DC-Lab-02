//HOMEWORK

const express = require ('express') //to import express
const hbs = require ('express-handlebars') //imports express-handlebars
const app = express () //to run the express functionality
//reference external JSON
const pokedexObj = require('./pokedex.json')


app.engine ('handlebars', hbs({
  defaultLayout: 'main' //what i am naming my default layout
}))

app.set('view engine', 'handlebars') //updating our view engine

app.get ('/', function (req, res) { //indicates request and response at client "/" - this sets what URL you want to respond to
  res.render ('home', pokedexObj) //renders home view with ..? a given function input?  reference function
  // res.render ('home', handlebars) //the executed response -- this lists out everything
    // res.render ('home', pokedexObj.pokemon ) //renders the value for the title object in the template
})

//create another route for pokemon page from solution how come it can
app.get('/pokemon/:id', function( req, res ) {
  let pokemon = getPokemon( req.params.id )
  res.render('pokemon', pokemon)
})



app.listen (3000, function ( )  { //listening on a port, and response
    console.log('listening');
    // console.log(pokemonNames ( ));
    // console.log(pokeArray);
    console.log('end of listening');


})

//lets identify the json content



// //this is my failed loop
// let pokemonNames = function () {
//   for (let i = 0; i <= pokedexObj.pokemon.length; i++) {
//     let pokeArray = []
//     console.log(pokedexObj.pokemon[i].name);
//     pokeArray.push(pokedexObj.pokemon[i].name);
//   }
// }


// zakk solution - why return here?

function getPokemon( id ) {
  for (let i = 0; i < pokedexObj.pokemon.length; i++) {
    if ( pokedexObj.pokemon[ i ].id === id ) {
      return pokedexObj.pokemon[ i ]
    }
  }
}




////
////
//
//
