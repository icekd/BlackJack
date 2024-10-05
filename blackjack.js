// Fisher–Yates shuffle
function shuffle(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    let k = Math.floor((Math.random() * (i + 1)));
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  } 
}

// Helper function to calculate hand total with Ace handling
function calculateHandTotal(hand) {
  let total = 0;
  let aceCount = 0;

  for (let card of hand) {
    total += card.face[1];
    if (card.face[0] === "ace") {
      aceCount++;
    }
  }

  // Handle Aces, treating them as 1 if total goes over 21
  while (total > 21 && aceCount > 0) {
    total -= 10;  // Treat an Ace as 1 instead of 11
    aceCount--;
  }

  return total;
}

function setHand(cards) {
  dealer.push(cards[index]);
  player.push(cards[index + 1]);
  dealer.push(cards[index + 2]);
  player.push(cards[index + 3]);
  index += 4;

  dealerCount = calculateHandTotal(dealer);
  playerCount = calculateHandTotal(player);
  
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
  img.height = 100;
  img.width = 100;

  player.push(cards[index]);
  playerCount = calculateHandTotal(player);
  index++;

  document.body.appendChild(img);
  
  if (playerCount > 21) {
    console.log("You lost with a score of " + playerCount);
    endGame();
  }
}

function standEvent() {
  // Dealer's turn
  while (dealerCount < 17) {
    dealer.push(cards[index]);
    dealerCount = calculateHandTotal(dealer);
    index++;
  }

  // Determine winner
  if (dealerCount > 21) {
    console.log("Dealer bust! You win!");
  } else if (dealerCount > playerCount) {
    console.log("Dealer wins with a score of " + dealerCount);
  } else if (dealerCount < playerCount) {
    console.log("You win with a score of " + playerCount);
  } else {
    console.log("It's a tie!");
  }

  endGame();
}

function startGame() {
  document.getElementById('start').style.display = "none";
  document.getElementById('hit').style.display = "block";
  document.getElementById('stand').style.display = "block";
  
  // Initialize hands and counts
  shuffle(cards);
  dealer = [];
  player = [];
  index = 0;
  setHand(cards);
  console.log("Dealer's first card: ", dealer[0].face[0] + " of " + dealer[0].suit);
  console.log("Player's hand: ", player);
}

function endGame() {
  dealer = [];
  player = [];
  dealerCount = 0;
  playerCount = 0;
  index = 0;
  document.getElementById('hit').style.display = "none";
  document.getElementById('stand').style.display = "none";
  document.getElementById('start').style.display = "block";
}

const suits = ["diamonds", "clubs", "hearts", "spades"];
const faceCards = [
  ["ace", 11], ["two", 2], ["three", 3], ["four", 4],
  ["five", 5], ["six", 6], ["seven", 7], ["eight", 8],
  ["nine", 9], ["ten", 10], ["joker", 10], ["queen", 10], ["king", 10]
];

var cards = [];
for(let i = 0; i < suits.length; i++) {
  for(let j = 0; j < faceCards.length; j++) {
    cards.push({ face: faceCards[j], suit: suits[i] });
  }
}

shuffle(cards);

var dealer = [];
var player = [];
var dealerCount = 0;
var playerCount = 0;
var index = 0;
var bet = 100;
