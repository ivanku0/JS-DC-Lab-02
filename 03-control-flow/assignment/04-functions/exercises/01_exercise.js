/*

Hello World

Write a function that `console.log`s 'Hello World' and call it.

*/


function helloWorld () {
  console.log('hello world, bitches');
}

helloWorld()

/*

Declare a variable called myNumber and assign a number value to it.

Next, declare a function using the `function` keyword called addOne that
adds 1 to myNumber. After that, declare an arrow function called
subtractOne that subtracts 1 from myNumber.

Use both of your functions a few times. If there's time, write
functions that add or subtract more than 1 from myNumber.

*/

const myNumber = 99

function addOne (oneUp) {
  let x = myNumber + oneUp
  console.log(x);
}

const subtractOne = (oneDown) => {
  let y = myNumber - oneDown
  console.log(y);
}


//figure out how to use GREV to take in user input instea of calling the function below

addOne(1023);
subtractOne(91);




// console.log(myNumber)
//
// addOne();
// addOne();
//
// console.log(myNumber);
//
// subtractOne();
//
// console.log(myNumber);


// Declare a variable called myNumber:



// Declare a function called addOne:



// Declare a function called subtractOne:



// Use addOne and subtractOne a few times:
