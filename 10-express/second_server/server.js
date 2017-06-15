const express = require ('express') //we must call this
const app = express()

app.get('/:name', function ( req, res ) { //add params here to designate person/requester route? (/:name)
  let name = req.params.name
  res.send ('hello world getter ' + name)
}) //is how you respond to get request

app.post('/', function ( req, res ) { //is how to respond to post request
  res.send ('hello world poster')
})



app.listen(3000, function() {
  console.log('listening on port 3000');
})

//routes are a way to define what requests we can respond to from a client
//yeah
