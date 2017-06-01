var myJSON = require('./one.js')

console.log(module.exports)



/*

1. prompt player 1 name and player 2 name
  - create player x var with name // create player y var with name
  - create new deck for player X with 26 cards // create new deck for player y with 26 cards

2. game function executes

  - execute round prep function
    - log the current round, iterate into round counter
    - remove random selected card from warDeck
    - add selected card into hand X // add selected card to hand Y
    - log selected card for player X // log selected card for player Y

  - run comparison function (COMPRE SCORE ATTR VALUES)
    - if player X has a bigger card than player Y, add the hand to player deck
    - else if player x has the same card as player y,
      - draw 2 more random cards to hand X // draw 2 more random cards from hand Y
      - if [1] from player X is greater than player Y, add hand array to winning player deck.


3. - loop function until || the other way around

      if player 1 deck.length = 51 && player 2 deck.length = 0
        console.log(Player 1 wins);

        else if
        player 2 deck.length = 51 && player 2 deck.length = 0
        console.log (player 2 wins)


for ( let roundNum = 1; p1Deck.length !== 0 || p2Deck.length !== 0; roundNum++ )


*/
