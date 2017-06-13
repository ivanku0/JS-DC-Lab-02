/*
 *
 * Templating Review
 *
 * We've seen how to work with templates in tryhandlebarsjs.com, now
 * we're going to look at how to use them inside a project!
 *
 */

// console.log(Handlebars);

const data = {
  person: {
    profPic: "http://0.gravatar.com/avatar/f190542c0ce80b9bc399f5039f6a8b86",
    name: {
      first: "Zakk",
      last: "Fleischmann"
    }
  }
}


/*
 * I've already included the script to include Handlebars in index.html.
 * Now, we need to build out a handlebars template.
 */



/*
 * Once we have the handlebars template defined, we need to get it using
 * javascript.
 */


/*
 * Now that we have our template's source, we need to compile it using
 * Handlebars. This is going to create a function that we can call and
 * pass data that will return the markup for our compiled template.
 */

// 1. compile data from dom.

let source = document.querySelector('#profile') //looks for our script element for template

// 2. compile the template source into a template function

let profileTemplate = Handlebars.compile ( source.innerHTML ) //pass the source of template use innerHTML to pass string into compiler

//compile returns a function -- take data -- interpolate -- creates final markup
//profile template becomes a function

// 3. call our template function passing in data

let renderedTemplate = profileTemplate( data ) //data references the object above
console.log( renderedTemplate );

//4 add our rendered HTML to te page

document.querySelector ('.content').innerHTML = renderedTemplate
