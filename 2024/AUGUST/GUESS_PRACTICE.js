/*
document.querySelector(".message").textContent = "HELLO";
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "CORRECT NUMBER🍷🍷";
console.log(document.querySelector(".message").textContent);
*/
/*
document.querySelector(".message").textContent = "START GUESSING";
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number🎉🎉";
document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = 20;
// document.querySelector(".input").textContent = 1111;
*/
let secretNum = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNum; //this line displays the number
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
  // console.log(guess, typeof guess);
  // console.log(typeof guess);
  // WHEN THERE IS NO INPUTS
  if (!guess) {
    document.querySelector(".message").textContent = "NO GUESS⛔⛔";
  } else if (parseInt(guess) === secretNum) {
    // WHEN THE PLAYER WINS
    document.querySelector(".message").textContent =
      "CONGRATULATIONS YOU WIN!🎉🎉🎉";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (parseInt(guess) > secretNum) {
    // WHEN THE GUESS IS TOO HIGH
    if (score > 1) {
      document.querySelector(".message").textContent = "GUESS TOO HIGH📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME😔😔";
    }
  } else if (parseInt(guess) < secretNum) {
    // WHEN THE GUESS IS TOO LOW
    if (score > 1) {
      document.querySelector(".message").textContent = "GUESS TOO LOW📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME😔😔";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "0";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
});
