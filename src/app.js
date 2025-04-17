import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  getRandomCard();
  
};


// Timer Function to Generate Card.
// Function for button to change card.

// Functions
function getRandomCard(){
// Grab the suit icons 

  //  For Testing log what the selector finds.
const topSuit = document.querySelector('#top-suit');
// topSuit.textContent
const bottomSuit = document.querySelector('#bottom-suit');
console.log(topSuit);
console.log(bottomSuit);

  // Define the suits
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  // Define values
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];
  // Build a random Suit
  const randomSuit = suits[Math.floor(Math.random()* suits.length)];
  // Build a randomValue
  const randomValue = values[Math.floor(Math.random()*values.length)];
   return  `${randomValue} of ${randomSuit}`;

  
}
console.log(getRandomCard());

