//initialize and call request
const express = require ('express')
const mongoose = require ('mongoose')
const hbs = require ('express-handlebars')
const bodyParser= require ('body-parser')

const app = express()

//bodyParser

app.use( bodyParser.urlencoded({ extended: true }))


//express actions

//creating index route
app.get('/', function( req, res ) {

  //looking for artist objects
  Artist.find( {}, function ( err, artistList) {

  //pass in artistList queried items
  res.render('index', { artistList })
  })
})
// Where we would get static URL but!
// app.get('/artists/artistDetail', function( req, res ) {
//   res.render('artists/artistDetail')
// })


//moving this above artist page render prioritizes this
app.get('/artists/addArtist', function( req, res ) {
  res.render('artists/addArtist')
})

//saving new instance of arist
app.post('/artists/addArtist', ( req, res ) => {

  let newArtistObj = new Artist ({
    name: req.body.name,
    bio: req.body.bio,
    album: req.body.album,
    artistImage: req.body.album
  })

  console.log(newArtistObj);

  newArtistObj.save(function(err) {
  if (err) throw err;
  })

  res.redirect(`/artists/${ newArtistObj._id }`)

})

//render artist page
app.get('/artists/:id', ( req, res ) => {
  Artist.findOne({ '_id': req.params.id }, ( err, artist ) => {
    console.log( artist )
    res.render('artists/artistDetail', artist)
  })
})

//render artist edit page with params
app.get('/artists/editArtist/:id', ( req, res ) => {
  Artist.findOne({ '_id': req.params.id }, ( err, artist ) => {
    console.log( artist )
    res.render('artists/editArtist', artist)
  })
})

//post upate to database with new artist information
app.post('/artists/editArtist/:id', ( req, res ) => {
  Artist.findOne({ '_id': req.params.id }, ( err, artist ) => {
    artist.name = req.body.name,
    artist.bio = req.body.bio,
    artist.album = req.body.album,
    artist.artistImage = req.body.aristImage

    artist.save()

    res.redirect(`/artists/${ artist._id }`)


  })

    // console.log( artist )
    // res.render('artists/editArtist/', artist)
    // res.redirect(`/`)


  })





// //render artist edit page (OG)
// app.get('/artists/editArtist', function( req, res ) {
//   res.render('artists/editArtist')
// })




//creating simple listening server
app.listen (3000, function () {
  console.log('Now listening on 3000');

})

//mongoose actions

//connect to mongoose db (i deleted database before ?ssl)
mongoose.connect('mongodb://w4ng:1bigpanda@clustersrevenge-shard-00-00-z110i.mongodb.net:27017,clustersrevenge-shard-00-01-z110i.mongodb.net:27017,clustersrevenge-shard-00-02-z110i.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=ClustersRevenge-shard-0&authSource=admin')

//testing mongoose schema
const Artist = require ('./models/artist.js')

// const linkinPark = new Artist ({
//   name: 'Linkin Park 2',
//   bio: 'Fuckin nu metal pioneers bro. in the end it dont matter',
//   album: 'Hybrid Theory'
// })
//
// linkinPark.save()

//handlebars actions
// set handlebars to work here
app.engine ('handlebars', hbs ({ defaultLayout: 'main'}))

//update view engine
app.set ('view engine', 'handlebars')
