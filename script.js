let timer = 60;
let rnHit = 0;
let score = 0;

function makeBubble() {
  let bubble = "";

  for (let i = 0; i <= 135; i++) {
    let rn = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(`.panel`).innerHTML = bubble;
}

function setTime() {
  let timeIn = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(`.timer`).textContent = timer;
    } else {
      clearInterval(timeIn);
      document.querySelector(`.panel`).innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function changeHit() {
  rnHit = Math.floor(Math.random() * 10);
  document.querySelector(`.hitelement`).textContent = rnHit;
}

function addScore() {
  score += 10;
  document.querySelector(`.score`).textContent = score;
}
function playGame() {
  document.querySelector(`.main`).addEventListener("click", function (dets) {
    let nbr = Number(dets.target.textContent);
    if (nbr === rnHit) {
      addScore();
      changeHit();
      makeBubble();
    }
  });
}

playGame();
addScore();
changeHit();
setTime();
makeBubble();
