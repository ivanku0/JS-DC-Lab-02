
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }
const p1 = ''
const p2 = ''
const roundNum = ''

//Create a card
class Card { //create a class
  constructor (rank, suit) { //constructing a object with...
    this.suit = suit //take on suit
    this.rank = rank //take on the rank
    this.score = rankScores [ rank ] //take on the rank score with the index value of rank
    this.title = `${rank} of ${suit}` //concatonate the two rank and suit phrases into string
  }
}

//Create a player
class Player {
  constructor ( playerOne, playerTwo ) { //constructing a player
    this.playerOne = p1
    this.playerTwo = p2
    this.p1Deck = []
    this.p2Deck = []
    this.warDeck = []

  }
  // Create new decks when creating new players
  createNewDeck() { //this also gets its own?
      for (let i = 0; i < suits.length; i++) {
        // second, loop through the ranks
        for (let j = 0; j < ranks.length; j++) {
          // create a string representing a card and push it into
          // our final array
          // i.e. 'ace of hearts'
          this.warDeck.push( new Card( ranks[j], suits[i]) ) //reference this function, variable, push output of Card function as it loops
          // return this.warDeck how do i reference this deck below?
        }
      }
      return this.warDeck
    }

    // i'd like to use this to know when to stop round counter?
    // this.p1Deck.length !== 0 || this.p2Deck.length !== 0

  prepRound () {
    for (let roundNum = 1; roundNum <= 52; roundNum++) {
      console.log('Round ' + roundNum + ' - FIGHT!')
      return roundNum
    }
  }
      generateCards () {
        //generate two random numbers
        let randNum1 =  Math.floor(Math.random() * this.warDeck.length)
        let randNum2 =  Math.floor(Math.random() * this.warDeck.length) //need to ref deck here -- probably need a new function to generate a random card?
        // console.log(randNum1, randNum2);

        //create two random cards
        var randCard1 = this.warDeck[randNum1];
        var randCard2 = this.warDeck[randNum2];

        //what if i create a new variable here for randcard value
        let randCard1Score = randCard1.score
        let randCard2Score = randCard2.score

        //and variables for titles? nope - these don't work...values don't transfer into next function
        let randCard1Title = randCard1.title
        let randCard2Title = randCard2.title

        return randCard1Score, randCard2Score, randCard1Title, randCard2Title
      }

      compareCards () {
        //compare values - how do i reference the variable above? this trips me up
        let cardMatchup = this.randCard1Score > this.randCard2Score; //error here - randCard1Score not defined

        //log results
        console.log('Player One draws ' + this.randCard1Title + '.');
        console.log('Player Two draws ' + this.randCard2Title + '.');

        console.log("Player One's score is " + this.randCard1Score + '. ' +
                    "Player Two's score is " + this.randCard2Score + '.');


        //provide score judgement & relocate cards to player decks
        if (this.randCard1Score === this.randCard2Score) {
          console.log('Tie! Time for war bitches');
          //how do we reference the previous cardgen here? and how do we loop it
          //each time?

        }

        else if (cardMatchup === true) {
          console.log('Player One wins the round!');
          this.p1Deck.push (randCard1.title, randCard2.title)

          console.log('Player One now has ' + this.p1Deck.length + ' cards: ' + this.p1Deck);
          this.warDeck.pop( [randNum1]);
          this.warDeck.pop( [randNum2]);
          console.log(this.warDeck.length + ' cards remaining');
          return
        }

          else if (cardMatchup === false) {
            console.log('Player Two wins the round!');
            this.p2Deck.push (randCard1.title, randCard2.title)

            console.log('Player Two now has ' + this.p2Deck.length + ' cards: ' + this.p2Deck);
            this.warDeck.pop( [randNum1]);
            this.warDeck.pop( [randNum2]);
            console.log(this.warDeck.length + ' cards remaining');
            return
            }

            //remove cards from main deck

          }

          //how do we iterate?

}

// maybe genrating new rounds should be a constructor too?
// class warRound {
//
// }







  // numGen = Math.floor(Math.random() * deckArray.length)

let testVar = new Player ()

function runGame () {
  testVar.createNewDeck()
  testVar.prepRound()
  testVar.generateCards()
  testVar.compareCards()
}

let letsPlay = runGame()

console.log(letsPlay);
