import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // getRandomCard();
  document.querySelector('#number').innerHTML = generateRandomNumber();
  let selectedSuit = generateRandomSuit();
  console.log(selectedSuit);
  document.querySelector("#top-suit").innerHTML = selectedSuit;
  document.querySelector("#bottom-suit").innerHTML = selectedSuit;

  
};


// Timer Function to Generate Card.
// Function for button to change card.

// Functions
// function getRandomCard(){
// Grab the suit icons 

  //  For Testing log what the selector finds.
// const topSuit = document.querySelector('#top-suit');
// topSuit.textContent
// const bottomSuit = document.querySelector('#bottom-suit');
// console.log(topSuit);
// console.log(bottomSuit);

  // Define the suits
  // const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  // Define values
  // const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];
  // Build a random Suit
  // const randomSuit = suits[Math.floor(Math.random()* suits.length)];
  // Build a randomValue
  // const randomValue = values[Math.floor(Math.random()*values.length)];
  //  return  `${randomValue} of ${randomSuit}`;

  function generateRandomNumber() {
    const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];
    let indexCardNumbers = Math.floor(Math.random()* cardNumbers.length);
    return cardNumbers[indexCardNumbers];
  }

  function generateRandomSuit(){
    const cardSuits = [{name: "heart", content: "&hearts;", color: "red"}, {name: "diamond", content: "&diams;", color: "red"}, {name: "club", content: "&clubs;", color: "black"}, {name: "spade", content: "&spades;",color: "black"}];
    let suitIndex = Math.floor(Math.random()*cardSuits.length);
    return cardSuits[suitIndex].content;
  }
// }
// console.log(generateRandomSuit());

