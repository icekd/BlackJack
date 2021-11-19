// Fisher–Yates shuffle
function shuffle(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    var k = Math.floor((Math.random() * (i + 1)));
    //console.log(k);
    var temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  } 
  for(var i = 0; i < arr.length; i++) {
  }
}

const suits = [
  "diamonds",
  "clubs",
  "hearts",
  "spades"
];

const faceCards = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "joker",
  "queen",
  "king"    
];

var cards = [];

for(var i = 0; i < suits.length; i++) {
  for(var j = 0; j < faceCards.length; j++) {
    cards.push({ face: faceCards[j], suit: suits[i] });
  }
}
shuffle(cards);

console.log(cards);


