

// Compile the template outside of the function, so that we only do it
// once, instead of on every render.
let app = document.querySelector('#weather').value
let templateSource = document.querySelector('#weather-template').value
let template = Handlebars.compile(templateSource)

function renderWeather() {
  let weatherHtml = template(weather)
  app.innerHTML = weatherHtml
}

// First render
renderWeather()

// Setup Listeners
let searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the values entered by the user
  // (you can get an input by it's name using 'input[name="theName"]')

let findInput = document.getElementById('searchForm')

findInput.addEventListener('submit', function ( ) {
    //define API URL
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=17c4b9321d054573c1c93f24f47e706a`

    //you can interpolate the above URL with dynamic code to update the URL

    //create new instance of XMLHttpRequest class
    let request = new XMLHttpRequest()

    request.onreadystatechange = handleRequest

    //add event listener here
    request.addEventListener('load', handleRequest)



    function handleRequest ( ) {
      if ( request.readyState === 4 ) {
        let response = JSON.parse ( request.response)
        console.log( response );

          // weather.city = response.name
          // weather.country = response.sys.country
          // weather.temperature = response.main.temp
          // weather.description = response.weather[0].description
          // weather.humidity = response.main.humidity
          // weather.clouds = response.weather.description
          //
          // console.log(weather.description);

//CURRENTLY BROKED!

          // Weather data
          let weather = {
            city: city,
            country: country,
            temperature: response.main.temp,
            description: response.weather[0].description,
            humidity: response.main.humidity ,
            clouds: response.clouds.all
          }

          renderWeather()

      }
    }

    //open it - telling it to GET request from the server, pass in URl
    request.open ( 'GET', url )

    //Send it
    request.send ()

})

  // 1. Make the request to OpenWeatherMap API using XMLHttpRequest()

  // 2. Update weather data
  // (you can parse a string of JSON into an object with JSON.parse()

  // 3. Render template with updated weather object

})
