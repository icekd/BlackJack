// Fisher–Yates shuffle
function shuffle(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    let k = Math.floor((Math.random() * (i + 1)));
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  } 
}


function setHand(cards) {
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
      index,
      bet
  };
}


function hitEvent() {		
      var img = document.createElement("img");
      img.src = "cards/" + cards[index].face[0] + cards[index].suit + ".png"; 
      
      playerCount = playerCount  + cards[index].face[1];
      
      img.height = 100; 
      img.width = 100;
	    index = index + 1;
      document.body.appendChild(img);
      if(playerCount > 21) {
        console.log("You lost with a score of " + playerCount);
        endGame();
     }
}



function standEvent() {

}

function startGame() {
  document.getElementById('start').style.display= "none";
  document.getElementById('hit').style.display="block";
  document.getElementById('stand').style.display="block";

}

function endGame() {
  let index = 0;
  let dealerCount = 0;
  let playerCount = 0;
  let bet = 0;
  document.getElementById('hit').style.display="none";
  document.getElementById('stand').style.display="none";
}



const suits = [
  "diamonds",
  "clubs",
  "hearts",
  "spades"
];

const faceCards = [
  ["ace", 11],
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

//var game = true;
var dealer = [];
var player = [];

var dealerCount = 0;
var playerCount = 0;
console.log(playerCount);
console.log(playerCount);
console.log(playerCount);
console.log(playerCount);

var index = 0;
var bet = 100;


//console.log("Place Bet: \n");
// user input will be defined based on end product framework such as Node.js, or html javascript
//bet = 1000;
//var coins = 10000;
//let userOption = 0;
/*
while(true) {
    console.log("1. Hit 2. Stand: \n");
    while(game) {
        if(userOption == 1) {
          player.push(cards[index]);
          playerCount = playerCount + cards[index].face[1];
          index = index + 1;
          if(playerCount > 21) {
            console.log("You got a bust with a score over 21");
            game = false;
            dealer = [];
            player = [];
            shuffle(cards);
            setup = setHand(cards);
            dealerCount = setup.dealerCount;
            playerCount = setup.playercount;
            index = setup.index;
            bet = setup.bet;
          }
        } else {
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
            shuffle(cards);
            setup = setHand(cards);
            dealerCount = setup.dealerCount;
            playerCount = setup.playercount;
            index = setup.index;
            bet = setup.bet;
        }
    }
}
*/




