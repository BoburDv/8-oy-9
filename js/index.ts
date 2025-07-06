const elGameZone = document.getElementById("gameZone") as HTMLElement;
const elSecondGameZone = document.getElementById("secondGameZone") as HTMLElement;
const elUser = document.getElementById("user") as HTMLImageElement;
const elRobot = document.getElementById("robot") as HTMLImageElement;
const elHands = document.querySelectorAll(".hand");
const elRefreshBtn = document.getElementById("refreshGame") as HTMLButtonElement;
const elStatus = document.getElementById("status") as HTMLElement;
const elScore = document.getElementById("score") as HTMLElement;
const elRulesBtn = document.getElementById("rulesBtn") as HTMLButtonElement;
const elModal = document.getElementById("modal") as HTMLDialogElement;

let score: number = 0;
const hands: string[] = ["paper", "scissors", "rock"];

function sectionSwapper(showSecond: boolean) {
  elGameZone.classList.toggle("hidden", showSecond);
  elSecondGameZone.classList.toggle("hidden", !showSecond);
}

function robotChooser(): string {
  return hands[Math.floor(Math.random() * hands.length)];
}

function findWinner(user: string, robot: string) {
  if (user == robot) return "EQUALLY";
  if (
    (user == "rock" && robot == "scissors") ||
    (user == "paper" && robot == "rock") ||
    (user == "scissors" && robot == "paper")
  )
    return "YOU WIN";
  return "YOU LOSE";
}

function updateUI(userChoice: string) {
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
    const btn = (e.target as HTMLElement).closest("button");
    const img = btn?.querySelector("img");
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
