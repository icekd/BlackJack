// Fisher–Yates shuffle
function shuffle(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    var k = Math.floor((Math.random() * (i + 1)));
    var temp = arr[i];
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

for(var i = 0; i < suits.length; i++) {
  for(var j = 0; j < faceCards.length; j++) {
    cards.push({ face: faceCards[j], suit: suits[i] });
  }
}
shuffle(cards);

console.log(cards);


