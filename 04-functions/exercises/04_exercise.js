/*

Card Game of War Exercise Part 1.

*/


/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/



// for (cardCount = 0; cardCount <= 52; cardCount++) {

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var deckArray = []

// const createDeck = (one, two) => {

function createDeck () {

    for (cardCount = 0; cardCount <= ranks.length - 1; cardCount++) {
      heartGen = ranks[cardCount] + ' of ' + suits[0];
      deckArray.push (heartGen);
    }

    for (cardCount = 0; cardCount <= ranks.length - 1; cardCount++) {
      clubGen = ranks[cardCount] + ' of ' + suits[1];
      deckArray.push (clubGen);
    }

    for (cardCount = 0; cardCount <= ranks.length - 1; cardCount++) {
      spadeGen = ranks[cardCount] + ' of ' + suits[2];
      deckArray.push (spadeGen);
    }

    for (cardCount = 0; cardCount <= ranks.length - 1; cardCount++) {
      diamondGen = ranks[cardCount] + ' of ' + suits[3];
      deckArray.push (diamondGen);
    }
    return deckArray
  }

var deckOfCards = createDeck();
// console.log(deckOfCards);
/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/

// function getRandomCard (input)

const getRandomCard = () => {
  // min = Math.ceil(deckArray);
  // max = Math.floor(deckArray);
  let numGen = 0
  numGen = Math.floor(Math.random() * deckArray.length)
  return deckArray[numGen]; //assign variables to array indicies because that shit is cray

}

// console.log(getRandomCard()); // you have to log the function because you arent telling it to print

// getRandomCard()

// console.log(pickSomething);

/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/



function dealHand (inputNum = 1) {
  var returnCard = []
if (true) {

}


  //  returnCard.push (inputNum);
  // } else if (dealHand(num) === 1) {
  //     console.log(deckArray[num]);
  //   }

  // } else if (dealHand(num) > 1) {
  //     console.log(); //returning cards as an array?
  //   }
  }


dealHand();
/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/

// var playerOneCards = { [] };
// var playerTwoCards = { [] };

//reference the function, pass the values into the above


/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/




/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
