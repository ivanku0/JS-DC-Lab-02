/*

Exercise One

*/


/*

Two basic event handlers
Discuss Together

*/

let counter = document.querySelector('.js-button')
counter.addEventListener ('click', function() { })
counter.onclick = function () {}


/*

Writing event handlers
Do Independently, then review together

1. Get the h1 element from the page and save it to a variable called myCounter
2. Declare a variable called counterIndex and set it equal to 0
3. Set the text of the header to the current value of our counter variable, so
the final html is: "<h1>Counter: 0</h1>"
4. Add an event listener to the button on the page so that when it is clicked,
the value of counterIndex is incremented by 1 and the new value is added to the
page

*/

let myCounter = document.querySelector('h1')
let counterIndex = 0

myCounter.innertext += counterIndex

// myCounter.append('Counter: ' + computerIndex)

myCounter.textContent = `Counter: ${ counterIndex }`
//

console.log(myCounter);

counter.addEventListener('click', function(){
  counterIndex ++
  myCounter.textContent = `Counter: ${ counterIndex }`} )
