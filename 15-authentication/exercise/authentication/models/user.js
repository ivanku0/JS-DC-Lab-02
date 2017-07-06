//we need a model because we'll have to create and save users

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//this parses hashes
const passportLocalMongoose = require ('passport-local-mongoose')

//passwords are stored as hashes aka secures the password
const accountSchema = new Schema ({
  username: String,
  password: String

})


//need to add plugin to our Schema 
accountSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model ('Account', accountSchema)

//dis all you need for the password
