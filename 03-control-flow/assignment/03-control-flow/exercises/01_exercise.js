/*
  For Loops
  In-class Exercise #1
  Code independently, then together
*/

// Create a variable called `age` and assign a number to it

let age = 99


// Using just an `if` statement, if age is less than 18, `console.log` 'You do not pass go'

console.log('part 1');

if (age < 18) {
  console.log('You do not pass go');
}
  else if (age > 18) {
  console.log('Thank you for smoking')
}
  else {
    console.log('Smoking is bad for you anyway');
    }



// Using an `if/else` statement, if age is over 18, `console.log` 'thank you for smoking', otherwise `console.log` 'smoking is bad for you anyway'.



// Using an `else if` statement, if age is greater than 18, `console.log` 'you may enter the castle'; if age is 17, `console.log`
//'come back in a few months'; otherwise, `console.log` 'you are not old enough to enter this castle'

console.log('part 2');

if ( age > 18 ) {
  console.log('you may enter the castle');
}
else if ( age == 17) {
  console.log('come back in a few months');
}
else {
console.log('you are not old enough to enter the castle');
}

// Using a ternary statement, if age is greater than 18, `console.log` 'you can come in'; otherwise, `console.log` 'you have to be 18 an older to come in here'

const newAge = 17

// if (age > 18) ? (console.log('come in'):console.log('you needa be 18 bro'))

console.log( newAge > 18 ? 'you come in' : 'gtfo dawg');

var sum41 = newAge < 18 ? 'you come in' : 'gtfo dawg'

console.log(sum41);