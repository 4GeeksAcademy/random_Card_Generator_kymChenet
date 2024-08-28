/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateCardRandom() {
    const palos = ["spade", "club", "heart", "diamond"];

    const valores = [
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

    const paloRandom = palos[Math.floor(Math.random() * palos.length)];
    const valorRandom = valores[Math.floor(Math.random() * valores.length)];

    document.querySelector(".card").className = `card card-${paloRandom}`;
    document.querySelector(
      ".card-header"
    ).className = `card-header ${paloRandom}`;
    document.querySelector(".card-center").textContent = valorRandom;
    document.querySelector(
      ".card-footer"
    ).className = `card-footer ${paloRandom}`;
  }
  generateCardRandom();

  document
    .getElementById("generate-card-btn")
    .addEventListener("click", generateCardRandom);
};
