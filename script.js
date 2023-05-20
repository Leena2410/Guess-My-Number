"use strict";
let secret = randomNum();
let score = 10;
let best_score = 0;
let hint = 0;

console.log(secret);

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess == secret) {
    /*----------*/
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rm";
    document.querySelector(".number").textContent = secret;
    document.querySelector(".message").textContent = "Right Number";
    document.querySelector(".hint").disabled = true;
    document.querySelector(".check").disabled = true;
    document.querySelector(".hint").style.backgroundColor = "#f0f0f0";
    document.querySelector(".check").style.backgroundColor = "#f0f0f0";
    if (score > 5) {
      hint++;
      document.querySelector(".HintMessage").textContent = `Hints = ${hint}`;
    }

    if (score > best_score) {
      best_score = score;
      document.querySelector(".highscore").textContent = best_score;
    }
  } else if (guess > secret) {
    wrongGuess();
    displyMessage("Too Heigh");
  } else if (guess < secret) {
    wrongGuess();
    displyMessage("Too Low");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000000";
  score = 10;
  document.querySelector(".label-score").textContent = `💯 Score: ${score}`;
  secret = randomNum();
  document.querySelector(".guess").value = "";
  document.querySelector(".hint").disabled = false;
  document.querySelector(".check").disabled = false;
  document.querySelector(".hint").style.backgroundColor = "#eee";
  document.querySelector(".check").style.backgroundColor = "#eee";

  console.log(secret);
});

function wrongGuess() {
  if (score > 1) {
    document.querySelector("body").style.backgroundColor = "#ff0000";
    document.querySelector(".number").style.width = "30rm";
    score--;
    document.querySelector(".label-score").textContent = `💯 Score: ${score}`;
  } else {
    score--;
    document.querySelector(".label-score").textContent = `💯 Score: ${score}`;
    displyMessage("You Lost The Game");
    document.querySelector(".number").textContent = secret;
  }
}

function displyMessage(message) {
  document.querySelector(".message").textContent = message;
}
function randomNum() {
  return Math.floor(Math.random() * 20 + 1);
}

function check(num) {}
document.querySelector(".hint").addEventListener("click", function () {
  let h;
  if (hint > 0) {
    hint--;
    document.querySelector(".HintMessage").textContent = `Hints = ${hint}`;
    do {
      h = randomNum();
    } while (h == secret);

    if (hint > secret) {
      document.querySelector(
        ".message"
      ).textContent = `The Number Is Larger Than ${h}`;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `The Number Is Smaller Than ${h}`;
    }
  } else {
    document.querySelector(".message").textContent =
      "You Dont Have Any Hint Points";
  }
});
