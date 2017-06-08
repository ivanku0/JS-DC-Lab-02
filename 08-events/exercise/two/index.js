/*

Exercise Two
The event object

*/



/*

Get an array of all the buttons on the screen. Write an event handler that just
`console.log`s "you clicked a button" when called. Loop over your array of
buttons and attach our event handler to each button

*/
// // dis correct tho
// let firstButton = document.querySelector (".js-button")
// firstButton.addEventListener ("click", function ( event ) {
//   console.log(event);
// })

/*

Refactor your event handler so that it `console.log`s the event object. Poke
around the event object

*/

// function eventHandler () {
//   console.log('You clicked something');
// }

let allButtons = document.querySelectorAll('.js-button')

//reference event handler instead of declaring a function multiple times

// for ( var i = 0; i < allButtons.length; i++ ) {
//     allButtons[i].addEventListener('click', eventHandler);
// }



/*

Refactor your event handler so that it `console.log`s the target subobject

*/
//
// let title = document.querySelector('h1')
// let counterIndex = 0
//
// title.innertext = `Counter: ${ counterIndex }`
//
// function eventHandler ( event ) { //ref the event // parseInt makes the number safer?
//   let incrementer = parseInt(event.target.dataset.incrementer); //calls the increment attr of the data obejcto f the event
//   counterIndex += incrementer //updates counterindex with incrementer value
// }

let title = document.querySelector('h1')
let counterIndex = 0



let buttons = document.querySelector('.js-buttons')

//lets click on a parent container, to pass one single event listener / event

buttons.addEventListener('click', function ( e ) {
  console.log('clicked');

  if ( e.target.tagName === 'BUTTON') {
  let incrementer = parseInt ( e.target.dataset.incrementer, 10)
  counterIndex += incrementer
  title.innertext = `Counter: ${ counterIndex } ` // this isn't working 
  }
} )

/*

Student activity:
Do one more refactor of the event handler. Your event handler should:

1. get the increment/decrement value from the event target
2. turn that value into a number
3. add the increment/decrement value to the current value of counterIndex and
update the page

Hint: any data that we define in our html with data-* will be in our elements
`dataset` property

*/
