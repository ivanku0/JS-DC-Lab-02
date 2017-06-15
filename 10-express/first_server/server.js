//my first server

const express = require ('express') //function
const app = express()

app.get('/', function( request, response ) { //function takes 2 arg - request and our response (both our objects with data in them)
    response.send ('hello world') //this executes in response to a request to the server
}) //method of app object takes 2 param and respond to git request in root folder?

app.listen(3000, function () { //this is what runs/boots server // each port has a unique number //listen for data on port 3000
  console.log('Your app is running on port 3000');
})
