/*

Create a function called addNumbers that takes two parameters and `console.log`s the result of adding the two parameters together

Create another function called subtractNumbers that takes two
parameters and `console.log`s the result of subtracting the second
parameter from the first parameter.

Call both functions twice, passing in different numbers as arguments
each time.

*/

//arguments passed into here, will be listed in the order it was passed 

const addNumbers = (num1, num2, ...numbers) => {
  console.log(numbers);
  console.log(num1);
  console.log(num2);
}

addNumbers(99, 102, 0, 10, 11);

const subNumbers = (numOne = 100, numTwo = 50) => {
  console.log(numTwo - numOne);
}

subNumbers(99);
