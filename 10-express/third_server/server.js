const express = require ('express') //imports express
const hbs = require ('express-handlebars') //imports express-handlebars

const app = express()

app.engine('handlebars', hbs({ //gives express a plugin to use // installing plugin
  defaultLayout: 'main' //this is a layout?
})) //tell express we're using hbs as a plugin (identifier for plugin as string, then the plugin function)

app.set('view engine', 'handlebars') //we want to use this as our view engine - express renders our views with handlebars (Activating plugin)

//respond to client request - get route

app.get('/', function (req, res) {
  // res.send('hello world');
    res.render ('home', { title: 'Test'} ) //render the html! in the HOME view, with the data (obj) of TEST
})


//create a route to respond to...

app.listen(3000, function( ) {
  console.log('listening on port 3000');
})
