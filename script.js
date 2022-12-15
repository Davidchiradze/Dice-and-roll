var randomNumber = Math.floor(Math.random() * 6) + 1;
var diceImg = document.querySelector(".dice");
var btnRoll = document.querySelector(".btn-roll");
var btnHold = document.querySelector(".btn-hold");
var gameStatus = false;
var activePlayer = 0;
var score = [0, 0];

var finalScore = document.querySelector(".final-score");
var activePlayerPanel = document.querySelector(
  ".player-" + activePlayer + "-panel"
);
var currentScore = activePlayerPanel.querySelector(".player-current-score");
var mainScore = activePlayerPanel.querySelector(".player-score");
var btnNew = document.querySelector(".btn-new");

var next = function () {
  currentScore.textContent = 0;
  activePlayerPanel.classList.remove("active");

  activePlayer = activePlayer === 0 ? 1 : 0;

  activePlayerPanel = document.querySelector(
    ".player-" + activePlayer + "-panel"
  );
  activePlayerPanel.classList.add("active");
  currentScore = activePlayerPanel.querySelector(".player-current-score");
};

btnRoll.addEventListener("click", function () {
  if (finalScore.value) {
    diceImg.style.display = "block";
    randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImg.src = "img/dice-" + randomNumber + ".png";

    if (randomNumber != 1) {
      currentScore.textContent = +currentScore.textContent + randomNumber;
      score[activePlayer] += randomNumber;
    } else {
      score = [0, 0];
      next();
    }
  } else {
    finalScore.focus();
    finalScore.placeholder = "Please Insert The Winner Score";
  }
});

btnHold.addEventListener("click", function () {
  var mainScore = activePlayerPanel.querySelector(".player-score");
  mainScore.textContent = +mainScore.textContent + score[activePlayer];
  if (+mainScore.textContent >= finalScore.value && finalScore.value) {
    mainScore.textContent = "Winner !!!";
  }
  next();
});

btnNew.addEventListener("click", function () {
  diceImg.style.display = "none";
  score = [0, 0];

  next();

  document
    .querySelector(".player-0-panel")
    .querySelector(".player-score").textContent = 0;
  document
    .querySelector(".player-1-panel")
    .querySelector(".player-score").textContent = 0;
  document
    .querySelector(".player-0-panel")
    .querySelector(".player-current-score").textContent = 0;
  document
    .querySelector(".player-1-panel")
    .querySelector(".player-current-score").textContent = 0;
});
