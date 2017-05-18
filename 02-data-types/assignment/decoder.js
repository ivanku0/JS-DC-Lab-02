/**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

 // Your code here

const code = [ ];

 /**
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */
code.push('x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n', 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r', 'o', 'm', 'c')
console.log(code)
/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */
console.log('Second part begins below');
console.log('');
const codeLength = code.length
const killEnd = codeLength - 2 //im sure there's a better way than this..but this took me forever
const codePop = code.splice(1, killEnd)
console.log(codePop);

//Nonsense below...
// const codeShift = codePop.splice((codePop.length), 1)
// console.log(codePop.length);
// const truncatedCode = code.splice(0, codeLength + 1)
// console.log(truncatedCode);
// console.log(codeShift);
// console.log(code.length);
// Your code here

/**
 * Question 4
 * Reverse the array.
 */
console.log('question 4 below');
console.log(codePop.reverse());
/**
 * Question 5
 * Replace the last element in the array with an 'e'.
 * Hint: Use length
 */

console.log('question 5 below');
// i know this is not the intented goal of lesson
// codePop.pop()
// codePop.push('e')
// codePop.splice(codePop.length - 1)
// codePop.push('e')

//figured it out...

codePop[codePop.length - 1] = 'e'
console.log(codePop);




/**
 * Question 6
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 */
console.log('Question 6 below');
codePop[4] = ''
codePop[13] = ''
console.log(codePop);
/**
 * Question 7
 * Join the array with an empty String in between each character and log the
 * result to the console.
 */
// lol you guys are dumb
console.log(codePop.join(' '));
