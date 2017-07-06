var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  displayName: String,
  bio: String
})

userSchema.methods.name = function() {
  return this.displayName || this.username
}
//
// //create a new object with schema
// const userSchema = mongoose.model ('User', userSchema)
//
// //export object
// module.exports = userSchema
