//initialize and call request
const express = require ('express')
const mongoose = require ('mongoose')
const hbs = require ('express-handlebars')
const bodyParser= require ('body-parser')
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');


const app = express()


//setting bcrypt Setting
var SALT_FACTOR = 10

//config flash messaging
//
//
// app.use(cookieParser('secret'));
// app.use(session({cookie: { maxAge: 60000 }}));
// app.use(flash());
//
// app.all('/', function(req, res){
//  req.flash('test', 'it worked');
//  res.redirect('/test')
// });
//
// app.all('/test', function(req, res){
//  res.send(JSON.stringify(req.flash('test')));
// });
//
//
//
// // Configuring Passport / auth
// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;
//
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }))
//
// //sets authentication route
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );
//
// //sets params for LocalStrategy to find username/pw
//
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
//   },
//   function(username, password, done) {
//     // ...
//   }
// ));


const userSchema = require ('./models/user.js')


//setting up cookie/session/flash
app.use(cookieParser())
app.use(session({
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

//pre-save hooks - will hash the password before it is saved. pre hooks run before operations. post hooks run after
var noop = function() {}

userSchema.pre("save", function( done ) {

  var user = this

  if ( !user.isModified("password") ) {
    return done();
  }

  bycrypt.genSalt( SALT_FACTOR, function( err, salt ) {

    if ( err ) { return done( err ) }

    bcrypt.hash( user.password, salt, noop, function( err, hashedPassword ) {

      if ( err ) { return done( err ) }

      user.password = hashedPassword
      done()

    })

  })

})

//verify if password is correct

userSchema.methods.checkPassword = function( guess, done ) {

  bcrypt.compare( guess, this.password, function( err, isMatch ){

    done( err, isMatch )

  })

}

router.get("/login", function(req, res) {

 res.render("login/login")

})

router.post("login/login", function(req, res, next) {
    var username = req.body.username
    var password = req.body.password

    User.findOne({
        username: username
    }, function( err, user ) {

        if ( err ) { return next(err) }

        if ( user ) {
            req.flash("error", "User already exists")
            return res.redirect("/login")
        }

        var newUser = new User({
            username: username,
            password: password
        })

        newUser.save( next )

    })
}, passport.authenticate("login", {

    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true

}))



//render the view login route


//creating index route
// app.get('/login', function( req, res ) {
//
//   res.render('login/login')
// })



////////////// OG SHIT BELOW /////////////////////






//ref css
app.use(express.static('public'))
// app.use(express.static('/styles'+ '/public'));

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

//post comments to artist array

app.post('/artists/:id', ( req, res ) => {

  Artist.findById( req.params.id, ( err, post ) => {

    post.comments.push( req.body )
    post.save()

    //does not render page with info
    res.render( 'artists/artistDetail', { post: post } )
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

})

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
