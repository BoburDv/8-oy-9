"use strict";
const elGameZone = document.getElementById("gameZone");
const elSecondGameZone = document.getElementById("secondGameZone");
const elUser = document.getElementById("user");
const elRobot = document.getElementById("robot");
const elHands = document.querySelectorAll(".hand");
const elRefreshBtn = document.getElementById("refreshGame");
const elStatus = document.getElementById("status");
const elScore = document.getElementById("score");
const elRulesBtn = document.getElementById("rulesBtn");
const elModal = document.getElementById("modal");
let score = 0;
const hands = ["paper", "scissors", "rock"];
function sectionSwapper(showSecond) {
  elGameZone.classList.toggle("hidden", showSecond);
  elSecondGameZone.classList.toggle("hidden", !showSecond);
}
function robotChooser() {
  return hands[Math.floor(Math.random() * hands.length)];
}

function findWinner(user, robot) {
  if (user == robot) return "EQUALLY";
  if (
    (user == "rock" && robot == "scissors") ||
    (user == "paper" && robot == "rock") ||
    (user == "scissors" && robot == "paper")
  )
    return "YOU WIN";
  return "YOU LOSE";
}

function updateUI(userChoice) {
  elUser.src = `./img/${userChoice}.svg`;
  const robot = robotChooser();
  setTimeout(function () {
    elRobot.src = `./img/${robot}.svg`;
    const winner = findWinner(userChoice, robot);
    elStatus.innerText = `${winner}`;
    if (winner == "YOU WIN") score++;
    else if (winner == "YOU LOSE" && score > 0) score--;
    elScore.innerText = String(score);
  }, 1000);
}
elHands.forEach(function (hand) {
  hand.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    const img = btn === null || btn === void 0 ? void 0 : btn.querySelector("img");
    if (!img) return;
    updateUI(img.alt);
    sectionSwapper(true);
  });
});
elRefreshBtn.addEventListener("click", function () {
  elRobot.src = "./img/hand-load.svg";
  elStatus.innerText = "";
  sectionSwapper(false);
});
elRulesBtn.addEventListener("click", function () {
  elModal.showModal();
});
