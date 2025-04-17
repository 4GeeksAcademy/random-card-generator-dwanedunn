import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  getRandomCard();
  setInterval(() => {
    getRandomCard();
  }, 5000);
  
};

  function getRandomCard(){
    document.querySelector('#number').innerHTML = generateRandomNumber();
    let selectedSuit = generateRandomSuit();
    console.log(selectedSuit);

    // Select HTML elements
    const topSuit = document.querySelector("#top-suit");
    topSuit.innerHTML = selectedSuit;
    const bottomSuit = document.querySelector("#bottom-suit");
    bottomSuit.innerHTML = selectedSuit;
  }
  
  function generateRandomNumber() {
    const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];
    let indexCardNumbers = Math.floor(Math.random()* cardNumbers.length);
    return cardNumbers[indexCardNumbers];
  }
  
  function generateRandomSuit(){
    const cardSuits = [{name: "heart", content: "&hearts;", color: "red"}, {name: "diamond", content: "&diams;", color: "red"}, {name: "club", content: "&clubs;", color: "black"}, {name: "spade", content: "&spades;",color: "black"}];
    let suitIndex = Math.floor(Math.random()*cardSuits.length);
    let cardSuit = cardSuits[suitIndex];
    // Add related classes to html
    console.log('before add css:',cardSuit['name']);
    if (cardSuit['name'] === 'heart'|| cardSuit['name'] === 'spade'){
      topSuit.classlist.add('red-card');
      bottomSuit.classlist.add('red-card');
    }
    return cardSuits[suitIndex].content;


  }



