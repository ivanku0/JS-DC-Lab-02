
const mongoose = require ('mongoose')

const Schema = mongoose.Schema

//new instance of Schema! we define a new class.

const entrySchema = new Schema( {
  content: String,
  name: String,
} )

//use the schema to define entry model - our model is 'entry' and follows the entrySchema
const Entry = mongoose.model ('Entry', entrySchema)

module.export = Entry ()
