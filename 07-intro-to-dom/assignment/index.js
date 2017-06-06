/*

This homework exercise will walk you through the steps to build a table of contents for the article in index.html.

The required part of this assignment is to generate a static table of contents. The bonus, if you have time, is to make it dynamic, so that each item in the table of contents links to the corresponding paragraph of text in the article body.

Before you get started, you should familiarize yourself with the HTML document that you'll be working with

*/


/*

Get the DOM nodes for the table of contents and the article body and save them both as variables

*/




// console.log(tableOC, articleBody);

/*

get an array of every heading in the document and store them in a variable called documentHeadings

*/


// console.log(documentHeadings);

/*

To generate our table of contents we need to do a couple of things:

1. We need to loop through our documentHeadings array
2. Inside our loop, we need to clone the curent element from the documentHeadings array and append it to the table of contents element

*/

// let anchorLink = document.createElement('a')
//
// let newID = tableOC.createElement('a');
// let uniqueID = tableOC.createTextNode (' - Chapter ' + i))


let tableOC = document.querySelector('#table-of-contents');
let articleBody = document.querySelectorAll('#article-body');
let documentHeadings = document.querySelectorAll('.heading')

// documentHeadings.linkCreate.id = i

for (let i = 0; i < documentHeadings.length; i++ ) {
  let tocClone = documentHeadings[i].cloneNode(true);
  //call individual elements with documentHeadings[i]
  //if we don't pass true to .cloneNode - that will not be a deep clone and not copy the child text

  tableOC.appendChild( tocClone );

  // let createClone = tableOC.appendChild( tocClone );
  // createClone = createClone += (' - Chapter ' + i)
  // document.createElement("a");
  tableOC.appendChild( tocClone ).textContent += (' - Chapter ' + i)

  //documentHeadings [i].id = "id" + i //you can do this instead of textContent
  //you can also use setAttribute
  //need to append clone to atag

  let link = document.createElement('a')

  // dot (.) whatever allows you to edit "classes" which are the tags here

  link.href = '#' + documentHeadings [ i ].id

  //then append atag to ToC

  link.appendChild( clone )
  //tableOC.appendChild ( ??? )

}


/*

Bonus, make each item of the ToC a link to that heading on the page.

*/

//USE ANCHORLINKS => append clone to anchor?

/*
1. add links - add links to ??? --






/*


/*

1. Modify each heading on the page so that it has a unique id (or figure out a way to make this part of your loop in part 2! Bonus bonus!)

A. Reference each heading
B. Declare variable,
C. Append variable to heading
D. loop and iterate variable

*/
//







// ${x}

/*

While looping through each item in your documentHeadings array:
1. create an <a> element
2. give it an href attribute that is the same as the ID of the current documentHeading
3. then append it to the table of contents element

hint: you want what you insert to look something like this:

<a href="#firstHeading"><h1>Lorem ipsum dolor sit amet</h1></a>

*/


// second attempt - i get an invalid str.length here

let findHeadings = document.getElementsByClassName("heading")
let createLink = document.createElement ('a')

for (let i = 0; i <= findHeadings.length; i++) {
  findHeadings = findHeadings.textContent += ("WHATEVER")
  createLink;
  createLink.href = i
    // findHeadings.href = i;
    // findHeadings.appendChild ()
}







// first attempt
// for (let x = 1; x < documentHeadings.length; x++ ) {
//   let eachHeading = documentHeadings[x]
//   eachHeading.textContent += ( ' - weenus ' + x)
//   // documentHeadings.appendChild ('hello?')
//
//     function createLinks () {
//
//     let newLink = document.createElement ('a')
//     newLink.href = "# " + x ;
//     newLink.textContent = 'Chapter ' + x ;
//
//     }
//
