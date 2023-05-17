"use strict";

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else {
    document.querySelector(".message").textContent = `The Guess is ${guess}`;
  }
});

function check() {
  console.log(document.querySelector(".guess").value);
}
