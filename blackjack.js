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
  ["joker", 11],
  ["queen", 12],
  ["king", 13]    
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

dealer.push(cards[index]);
player.push(cards[index + 1]);
dealerCount = dealerCount + cards[index].face[1];
playerCount = playerCount + cards[index + 1].face[1];
index = index + 2;

while(game) {
    
}






