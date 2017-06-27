//call schema from mongoose
const mongoose = require ('mongoose')
const Schema = mongoose.Schema


//define the Artist object schema
const artistSchema = new Schema ({
  name: String,
  bio: String,
  artistImage: String,
  album: String,
  comments: Array
})

//create a new object with schema
const Artist = mongoose.model ('Artist', artistSchema)

//export object
module.exports = Artist
