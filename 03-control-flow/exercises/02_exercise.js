/*
  While Loops
  In-class Exercise #2
  Code Independently, then together
*/

// Create an array with the names 'curly', 'lary' and 'moe'

let myBros = ['curly', 'larry', 'moe', 'SEAN JOHN BABY']
let homieCount = 0
/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/
//
// for (homieCount = 0; homieCount < myBros.length; homieCount++) {
//   console.log(myBros[homieCount]);
// }


/*
Create a simple while loop that iteratoes over each name in the array of names.
Inside your loop, if the name is 'curly', then `console.log` 'curly is the best',
otherwise `console.log` the current name is one of the three stooges
*/
//
// for (homieCount = 0; homieCount < myBros.length; homieCount++) {
// if (myBros[homieCount] === 'curly' ) {
//   console.log('curly is wack as fuck')
// }
//   else {
//     console.log(myBros[homieCount])}
// }

// A `do while` loop
// var i = 0
// do {
//   console.log( i )
//   i++
// } while ( i < 0 );

do {
    if (myBros[homieCount] === 'curly') {
      console.log('curly is a bitch')
    }
      else {
        console.log(myBros[homieCount]);
      }
    homieCount++
} while (homieCount < myBros.length)
