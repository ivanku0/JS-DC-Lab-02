/*

PIXART
A JS Painting Website

In this exercise, students will build out a simple paint application. This application will have a form where users can set a color that they would like to paint with. The user can then mouse over cells that they would like to paint with that color.

*/



/*

Step 1: Building the canvas
Our canvas is 500px by 500px and we need to fill it with cells (wich a class of .square) that are 10px by 10px.

First, add however many divs with a class of "square" as you need to to fill our the #canvas element.

If #canvas is 500 x 500, how many 10 x 10 squares can we fit in to it?

How we we create elements in JavaScript and add them to the page?

*/

//canvas exists already, it seems?



// Appending
// var link = document.createElement('a') // creates a new element (in memory)
// document.getElementById('first-paragraph').appendChild( link )
// link will be appended (added to the end) as a child (so within the p element)



let canvas = document.getElementById('canvas')

// // will work! but needs to be inside the loop to create it multiple times
// let square = document.createElement('div')
// square.className = 'square'

//
// square.style.width = '100px'
// square.style.height = '100px'

// console.log(canvas);
// console.log(square);

// // produces only one square
// for ( let i = 0; i <= 10; i++) {
//   canvas.appendChild( square )
// }

for ( let i = 0; i < 2500; i++) {
  let square = document.createElement('div')
  square.className = 'square'
  canvas.appendChild( square )


  // when i do this, i get one pixel ?
  // let findSquare = document.querySelectorAll('.square');
  // findSquare.addEventListener('click', function () {
  //   console.log('hello');
  }




// document.querySelector('#canvas').appendChild( square )

// function makeCanvas () {
//   let canvas = document.querySelector('#canvas');
//   canvas.appendChild (makeSquare())
//   canvas.height = '500px';
//   canvas.width  = '500px';
// // }
//
// function makeSquare () {
//   let square = document.createElement('div');
//   square.class = '.square';
//   square.height = '10px';
//   square.width = '10px';
// }

// makeCanvas()
//
// makeSquare()





/*

Step 2: Form Event
When the user submits the form, either by hitting enter in the text input field or by clicking on the submit button, we should then get the color value that they entered and save it to a variable called currentColor.

Once we have the color, we should update our .brush element, so that the user can see what color they're painting with at any given time.

hints:
(1) you may need to look up form specific events,
(2) you may need to avoid the browser's default behavior when submitting a form,
(3) you should query for the input field from the event target
(4) once you have the input field, it's current value is stored in the value property

*/

let currentColor = 'green'
let brush = document.querySelector('.brush') //this was missing

let submitButton = document.querySelector('#set-color')
// console.log(submitButton); //button value is not equivalent to form submit - how do we get it?
submitButton.addEventListener('click', function( e ) {
  e.preventDefault(); //stop default action? prevent data from being submitted
    // console.log(e.target.nodeName); //logs button name

    if (e.target.nodeName === 'BUTTON') { //validating a button was pressed
      currentColor = document.querySelector('#color-field').value
      console.log("currentColor:", currentColor)

      // console.log(currentColor); it works!
        //need to ref brush class which is above
      // console.log(brush);

      // currentColor = e.target.querySelector('input').value

      currentColor = brush.style.background//set new value



    }

  })


/*

Step 3: Readying our Canvas
Now that we can get the color the user wants to paint with from our form, we need to make it so they can actually paint with that color. Create an event handler that will change the background color of the event target to the current color and attach it to every div.square that you created made above.

Hints:
(1) you probably want to write your function here and then attach the event in your loop up in Step 1
(2) think about what event we might want to attach our event handler too; what mouse events are there that might make sense?

*/



// console.log(findSquare);

// findSquare.addEventListener('mouseover', function ( ) {
//   let brush = document.querySelector('.brush')
//   findSquare.style.background = brush.style.background //how can i do this without repeating all this stuff?
// })

//

// let findSquare = document.querySelectorAll('.square');
// findSquare.addEventListener('click', function () {
//   console.log('hello');


//having trouble referencing colors
//
// function setnewColor () {
//   // console.log("setnewColor called")
//   let brushColor = document.querySelector('.brush')
//   // let currentColor = document.querySelector('#color-field')
//   // console.log("current color:", currentColor)
//   let findSquare = document.querySelectorAll('.square')
//
//   // canvas.addEventListener('hover', function () {
//   //   console.log("hover")
//   //   let brush = document.querySelector('.brush')
//   //   console.log("findSquare.style: ", findSquare.style)
//   //   findSquare.style.background = brushColor.style.background
//   //
//   //   return currentColor
//   // })
// }



canvas.addEventListener('mouseover',function (e)
{e.target.style.background = currentColor})
