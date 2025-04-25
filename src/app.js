import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let topSuit = document.querySelector("#top-suit");
  let bottomSuit = document.querySelector("#bottom-suit");

  getRandomCard();
  setInterval(() => {
    getRandomCard();
  }, 10000);

  document.querySelector('#new-card').addEventListener('click', getRandomCard );

}

function getRandomCard() {
  document.querySelector('#number').innerHTML = generateRandomNumber();
  let selectedSuit = generateRandomSuit();

  document.querySelector("#top-suit").innerHTML = selectedSuit;
  document.querySelector("#bottom-suit").innerHTML = selectedSuit;
}

function generateRandomNumber() {
  const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];
  let indexCardNumbers = Math.floor(Math.random() * cardNumbers.length);
  return cardNumbers[indexCardNumbers];
}

function generateRandomSuit() {
  const cardSuits = [{ name: "heart", content: "&hearts;", color: "red" },
  { name: "diamond", content: "&diams;", color: "red" },
  { name: "club", content: "&clubs;", color: "black" },
  { name: "spade", content: "&spades;", color: "black" }];

  let suitIndex = Math.floor(Math.random() * cardSuits.length);
  let cardSuit = cardSuits[suitIndex];

  if (cardSuit['name'] === 'heart') {
    document.querySelector("#top-suit").classList.remove('heart', 'spade', 'diamond');
    document.querySelector("#top-suit").classList.add('heart');
    document.querySelector("#bottom-suit").classList.remove('heart', 'spade', 'diamond');
    document.querySelector("#bottom-suit").classList.add('heart');
  }

  if (cardSuit['name'] === 'spade'){
    document.querySelector("#top-suit").classList.remove('heart', 'spade', 'diamond');
    document.querySelector("#top-suit").classList.add('spade');
    document.querySelector("#bottom-suit").classList.remove('heart', 'spade', 'diamond');
    document.querySelector("#bottom-suit").classList.add('spade');
  }

  if (cardSuit['name'] === 'diamond'){
    document.querySelector("#top-suit").classList.remove('heart', 'spade', 'diamond');
    document.querySelector("#top-suit").classList.add('diamond');
    document.querySelector("#bottom-suit").classList.remove('heart', 'spade', 'diamond');
    document.querySelector("#bottom-suit").classList.add('diamond');
  }
  return cardSuits[suitIndex].content;

}



