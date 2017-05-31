/*

Objects

Instructions ( How to use this file ):
Uncomment lines of code and run the file using `node control-flow.js` to see
their output. Make sure you recomment out the parts of the file you just
executed before moving on!

1. Anatomy of an Object
2. Working with Objects
3. JSON
4. Object Oriented Programming

*/


/*
 * 1. Anatomy of an Object
 */

// Declaring our first object
const Person = {
  'first name': 'Zakk',
  lastName: 'Fleischmann',
  favoriteColors: 'green',
  favoriteNumbers: [7, 8 ,9],
  height: {
    feet: 6,
    inches: 4
  },
  sayHello: function( name ) {
    console.log( 'Hello, ' + (name || 'you') + '! Hope you are well!' )
  }
}


/*
 * 2. Working with Objects
 */

// // Getting values from our object
Person['first name'] // Bracket notation
Person.lastName // Dot notation

// Setting values from our object (with reassignment)
Person.favoriteColors = 'just green'
Person.height.feet = 10
Person['height']['inches'] = 6 //you can chain these together to get at nested properties. very common*

console.log( Person.height )

// Calling methods
// Person.sayHello() //you need to reference the object, and then call the function! like the log function of console

Creating new methods
Person.grow = function( inches = 2 ) { //adding a new function with the key of grow
  let currentHeight = Person.height.feet * 12 + Person.height.inches + inches

  Person.height = {
    feet: Math.floor( currentHeight / 12 ),
    inches: currentHeight % 12
  }

}

console.log( Person.height )
console.log( Person.grow( 1 ) )
console.log( Person.height )


/*
 * Looping Over an Object
 */

let testObject = {
  a: 1,
  b: 2,
  c: 3
}
// Get the object keys
console.log( Object.keys( testObject ) ) // =? ['a', 'b', 'c']

Object.keys( testObject ).forEach((prop) => console.log(`key is ${ prop }: ${ testObject[prop] }`))
//prop is equal to a key inside our project. use bracket notation to look up values. \
// testObject[ Prop ]
//forEach is an array method will loop through it, and call a function for each value of an array

//$ is a string interpolator

/*
 * 2. JSON
 */

// var jsonData = {
//   "Foods": [
//     {"name":"aubergine", "color":"purple", "price": 1.59},
//     {"name":"apple", "color":"red", "price": 0.78},
//     {"name":"nuts", "color":"brown", "price": 2.23}
//   ]
// }
//
// console.log( jsonData.Foods[1] ) // {"name":"apple", "color":"red", "price": 0.78}


/*
 * 4. Object Oriented Programming
 */

class Car {

  constructor( make, model ) { //constructor is what is called every time you create a ew instance of car
    this.make = make  //these are properties 
    this.model = model
    this.gears = ['P', 'N', 'R', 'D']
    this.currentGear = this.gears[ 0 ]
  }

  shift ( gear = 'P' ) { //this declares a new method right here - same as var function()
    // Check to make sure the passed in gear is a real gear:
    if ( this.gears.indexOf( gear ) < 0 ) { gear = 'P'  }

    // if it is, then set the currentGear property
    this.currentGear = gear
  }

}

const zakksCar = new Car("Toyota", "Carola")
const christinesCar = new Car("Lamborghini", "Aventador")
