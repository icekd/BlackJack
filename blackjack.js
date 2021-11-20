// Fisher–Yates shuffle
function shuffle(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    let k = Math.floor((Math.random() * (i + 1)));
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  } 
}

const suits = [
  "diamonds",
  "clubs",
  "hearts",
  "spades"
];

const faceCards = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
  ["ten", 10],
  ["joker", 10],
  ["queen", 10],
  ["king", 10]    
];

var cards = [];

for(let i = 0; i < suits.length; i++) {
  for(let j = 0; j < faceCards.length; j++) {
    cards.push({ face: faceCards[j], suit: suits[i] });
  }
}

shuffle(cards);
//console.log(cards);

let game = true;
let dealer = [];
let player = [];
let dealerCount = 0;
let playerCount = 0;
let index = 0;
let bet = 0;
function setHand(cards,dealerCount,playerCount,index) {
    index = 0;
    dealercount = 0;
    playerCount = 0;
    dealer.push(cards[index]);
    player.push(cards[index + 1]);
    dealer.push(cards[index + 2]);
    player.push(cards[index + 3]);
    index = index + 4;
    dealerCount = dealerCount + cards[index].face[1] + cards[index + 2].face[1];
    playerCount = playerCount + cards[index + 1].face[1] + cards[index + 3].face[1];
   return {
        dealerCount,
        playerCount,
        index
    };
}





console.log("Place Bet: \n");
// user input will be defined based on end product framework such as Node.js, or html javascript
let bet = 1000;
var coins = 10000;
let userOption = 0;

console.log("1. Hit 2. Stand: \n");
while(game) {
    if(userOption == 1) {
      player.push(cards[index]);
      playerCount = playerCount + cards[index].face[1];
      index = index + 1;
    } else {
        game = false;
        if(playerCount > dealerCount) {
           coins = coins + 2 * bet;
           console.log("You won with a score of " + playerCount);
        } else if(playerCount == dealerCount) {
           coins = coins + bet;
           console.log("You tied with a score of " + playerCount);
        } else {
           //coins are l
           console.log("You lost with a score of " + playerCount);
        }
        game = false;
        dealer = [];
        player = [];
        bet = 0;
        shuffle(cards);
    }
}






