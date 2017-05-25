// **99 Bottles of Beer** (bottles.js)
// Write a script that logs to the console the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html). Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

//Okay what do i need to do here?
// 1 - log the first line with a variable for bottles of beer
// 2 - loop that function
// 3 - check if 99 bottles reaches 0, if yes - print final line, if no - subtract beerVar - and print again

// A basic `for` loop with an array
// var grades = [87, 95.5, 40, 79, 20]
//
// for (var i = 0; i < grades.length; i++) {
//
//   if ( grades[i] >= 90 ) {
//     console.log( 'A' )
//   } else if ( grades[i] >= 80 ) {
//     console.log( 'B' )
//   } else if ( grades[i] >= 70 ) {
//     console.log( 'C' )
//   } else {
//     console.log( 'D' )

let loopCount = 99

for (true; loopCount >= 0; loopCount--) {
  if ( loopCount > 2) {
    // console.log(loopCount + ' bottles of beer on the wall, ' + loopCount + ' bottles of beer. Take one down and pass it around, ' loopCount - 1 ' no more bottles of beer on the wall')
    console.log(loopCount + ' bottles of beer on the wall, ' + loopCount + ' bottles of beer. Take one down and pass it around, ' + (loopCount - 1) + ' bottles of beer on the wall')

  }   else if (loopCount === 2) {
      console.log(loopCount + ' bottles of beer on the wall, ' + loopCount + ' bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall')


    }  else if (loopCount === 1) {
          console.log(loopCount + ' bottle of beer on the wall, ' + loopCount + ' bottle of beer. Take one down and pass it around, no more bottles of beer on the wall')

    } else {
        console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')

      }

    }
