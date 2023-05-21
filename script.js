"use strict";
let secret = randomNum();
let score = 10;
let best_score = 0;
let hint = 0;

console.log(secret);

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    displyMessage("No Number");
  } else {
    if (guess == secret) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      viewSecret();
      displyMessage("Right Number");
      disable();
      if (score > 5) {
        hint++;
        document.querySelector(".HintMessage").textContent = `Hints = ${hint}`;
      }
      if (score > best_score) {
        best_score = score;
        document.querySelector(".highscore").textContent = best_score;
      }
    } else if (guess > secret + 2) {
      displyMessage("Too Heigh");
      scoreMin();
    } else if (guess < secret - 2) {
      displyMessage("Too Low");
      scoreMin();
    } else {
      displyMessage("Close...?");
      scoreMin();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  displyMessage("Start Guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000000";
  score = 10;
  document.querySelector(".label-score").textContent = `💯 Score: ${score}`;
  secret = randomNum();
  document.querySelector(".guess").value = "";
  enable();

  console.log(secret);
});

function displyMessage(message) {
  document.querySelector(".message").textContent = message;
}
function randomNum() {
  return Math.floor(Math.random() * 20 + 1);
}

document.querySelector(".hint").addEventListener("click", function () {
  let hintValue = 0;
  if (hint > 0) {
    do {
      hintValue = randomNum();
    } while (hintValue == secret);

    if (hintValue < secret) {
      displyMessage(`The Number Is Bigger Than ${hintValue}`);
    } else {
      displyMessage(`The Number Is Smaller Than ${hintValue}`);
    }

    hint--;
    document.querySelector(".HintMessage").textContent = `Hints = ${hint}`;
  } else {
    displyMessage("You Have No Hint Points");
  }
});

function scoreMin() {
  score--;
  document.querySelector(".label-score").textContent = `💯 Score: ${score}`;
  if (score == 0) {
    displyMessage("You Lost The Game");
    disable();
  }
}

function disable() {
  document.querySelector(".hint").disabled = true;
  document.querySelector(".check").disabled = true;
  document.querySelector(".hint").style.backgroundColor = "#f0f0f0";
  document.querySelector(".check").style.backgroundColor = "#f0f0f0";
}

function viewSecret() {
  document.querySelector(".number").style.width = "30rm";
  document.querySelector(".number").textContent = secret;
}

function enable() {
  document.querySelector(".hint").disabled = false;
  document.querySelector(".check").disabled = false;
  document.querySelector(".hint").style.backgroundColor = "#eee";
  document.querySelector(".check").style.backgroundColor = "#eee";
}
