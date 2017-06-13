// create an event listener for a button
// take input from the button
// add it into the list

//display items on page


//create an object, with an attribute array.

var newItem = {
  title: 'Shit you gotta do',
  todos: [],
  isComplete: function () {}
}

// listens for for input, pushes it into todo array

let findForm = document.querySelector('#form')

findForm.addEventListener('submit', function( e ) {

  if (e.target.querySelector('input').value !== '') {

    e.preventDefault()
    newItem.todos.push (e.target.querySelector('input').value)
    e.target.querySelector('input').value = ''
    console.log(newItem); //test into console
    renderedTemplate = listTemplate( newItem )
    findApp.innerHTML = renderedTemplate
    }


  else {
    window.alert("Please write something to do");
  }

})


// identify script to perform JS in
let source = document.querySelector('#profile')

// create a handlebars template/function? out of this
let listTemplate = Handlebars.compile ( source.innerHTML )

// 3. call our template function passing in data
let renderedTemplate = listTemplate( newItem ) //data references the object above



console.log( renderedTemplate ); // check what comes out

//4. append to document?

let findApp = document.querySelector('#app')

// may need an additional event listener to trigger when ?? its triggering when
// the user submitted items aren't in the array





// You'll need to refactor your template to include links to mark each to do as complete
// or delete it. Then in your data object, you'll have to modify your to dos to be objects
// (instead of strings in an array) with an isComplete property that is either true or
// false. Finally, you'll need to create methods that will handle that functionality for
// when users mark a to do as complete or delete it.

//if X = true
// remove item from list
// update list


// listen for image click
// convert items in list to objects
// assign two properties: description, and done
// create iD iterator to generate unique ID for links
// listen for unique iD number
// check if remove = true
// add method that removes it from array
// rebuild templates
// readd into HTML


//looks like you can't do querySelector inside of the script?
let findList = document.querySelector('#app')

findList.addEventListener('click', function( e ) {
  // let listIndex = newItem.todos.indexOf (e)
  let listIndex = e.target.parentNode.dataset.index
  console.log('the listen index is ' + listIndex);
  newItem.todos.splice (listIndex, 1)

  // newItem.todos.push (e.target.querySelector('input').value)
  console.log(newItem); //test into console
  renderedTemplate = listTemplate( newItem )
  findApp.innerHTML = renderedTemplate

  //this doesn't work
  if (newItem.todos === []) {
    newItem.title = 'Nice job! Nothing left'
    console.log(newItem.title);
  }

  })


// //how to find index value
//   var pos = fruits.indexOf('Banana');
//
//
// //how to delete item by index value
// var removedItem = fruits.splice(pos, 1); // this is how to remove an item
//
//
//
// function changeDesc( value, desc ) {
//    for (var i in projects) {
//      if (projects[i].value == value) {
//         projects[i].desc = desc;
//         break; //Stop this loop, we found it!
//      }
//    }
// }
