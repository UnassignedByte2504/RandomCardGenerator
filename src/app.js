/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  window.genCard = function() {
    var suit = ["♥", "♠", "♣", "♦"];
    var numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    function randomCard() {
      var randomSuit = suit[Math.floor(Math.random() * suit.length)];
      var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

      document.querySelector(".icon").innerHTML = randomSuit;
      document.querySelector(".cardContentContainer").innerHTML = randomNumber;
      document.querySelector(".iconTwo").innerHTML = randomSuit;

      if (randomSuit == "♥" || randomSuit == "♦") {
        document.querySelector("#maincardcontainer").style.color = "blue";
      } else if (randomSuit == "♠" || randomSuit == "♣") {
        document.querySelector("#maincardcontainer").style.color = "white";
      }
    }

    randomCard();
  };

  window.genCard();
};
