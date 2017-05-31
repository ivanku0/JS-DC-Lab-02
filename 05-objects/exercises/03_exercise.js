/*

You can pull in data from another file using JavaScripts `require()` method,
which you pass a path as a string to the file you wish to incldue. For instance,
you could require a json file like this:

var myJSON = require('./path/to/file.json')

Given the above, import `data.json` and save it to a variable.

Once json data is imported, it can be treated like a regular JavaScript object.
How cool is that?

Write a loop that will print out our JSON data as a string, in the following format:

Quick-E-Mart's Current Stock
Item, Color, Price
Aubergine, Purple, 1.59
Apple, Red, 0.78
Nuts, Brown, 2.23

*/


var myJSON = require('/Users/ivankou/ga-javascript/js-dc-5/05-objects/exercises/data.json')

// console.log(myJSON); this works

console.log( Object.keys (myJSON));

Object.keys( myJSON ).forEach((collect) => console.log("Quick-E-Mart's curent stock"));

// myJSON.foods forEach( collect => console.log(collect));

// FIGURE OUT HOW TO DIAGRAM THIS 
