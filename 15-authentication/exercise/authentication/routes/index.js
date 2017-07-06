var express = require("express")
const passport = require('passport');
const User = require ('../models/user')

// Create a router for handling our application as
// well as our sign-up flow
var router = express.Router()

// Index route
router.get("/", function( req, res ) {
  //checks if user is logged in?
  res.render('index', { user: req.user })

})

router.get('/signup', function ( req, res ) {
  res.render('signup', { } )

})


router.post('/signup', ( req, res ) => {

//create users!

//before creation, check and validate if user names exist here 

  User.register(
      new User ({
        username: req.body.username

      }),
      req.body.password,
      (err, account ) => {
        if (err) {
          return res.render ('signup', { account: account })
        }
        //request takes a response as a callback
        //local refers to our strategy (local)
        passport.authenticate ('local') (req, res, () => {

            //if redirect is successful, you know the new user was created
            res.redirect('/')
        })
      }
  )

})

//now create a login route

router.get ('/login', ( req, res ) => {
    //if user is logged in, it will pass in the user info in the req object
  res.render ('login', { user: req.user })

})

//now we need middleware- passing in passport.autheticate as middleware

router.post ('/login', passport.authenticate('local'), ( req, res ) => {
  res.redirect('/')

})

router.get ('/logout', (req, res) => {
  res.logout( )
  res.redirect('/')

})



module.exports = router
