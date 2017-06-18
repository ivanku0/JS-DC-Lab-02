//this is the ONE schema for definding object attributes

//connect to mongodb with mongoose
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//schemas define the data types that go into it that will be used to verify data while its instantiated?

const todoSchema = new Schema( {
  title: String,
  isComplete: Boolean,

} )


// //creating a model using it
// const Task = mongoose.model('Task', todoSchema)
//
// //make this available to users outside of this ...
//
//
// module.export = Task  ()

const Entry = mongoose.model ('Entry', todoSchema)

module.export = Entry()
