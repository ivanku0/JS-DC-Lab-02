const express = require('express')

const Post = require('../models/posts.js')

const appRouter = express.Router()

appRouter.get('/', ( req , res ) => {
  // index route
  // list every article
  Post.find({}, ( err, posts ) => {

    res.render('index')

  })

})

module.exports = appRouter
