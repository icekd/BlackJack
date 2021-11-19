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
    cards.push(faceCards[i],suits[j]);
  }
}
