const gameModule = (function () {
  /////////CHACHE
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelector(".game-board");
  const restartbtn = document.querySelector(".reset-button");
  let gameText = document.querySelector(".game-text").textContent;
  console.log(gameText);
  gameText = "asdsa";
  let round = 0;
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  /////////
  const buttonClickHandler = function (event) {
    round % 2 === 0 ? playX(event) : playO(event);
    round++;
    winnerCheck();
  };
  const restartHandler = function () {
    gameArray = ["", "", "", "", "", "", "", "", ""];
    round = 0;
    document
      .querySelectorAll(".game-board button")
      .forEach((button) => (button.textContent = ""));
    const buttons = document.querySelectorAll(".game-board button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  };

  /////////SET BOARD
  for (let i = 0; i < 9; i++) {
    let button = document.createElement("button");
    button.dataset.index = `${i}`;
    gameBoard.appendChild(button);
    button.addEventListener("click", buttonClickHandler);
  }
  restartbtn.addEventListener("click", restartHandler);
  ////////////////////////////////////////////////////////////////
  const playX = function (event) {
    gameText = "turn O";
    let index = event.target.dataset.index;
    if (gameArray[index] === "") {
      gameArray.splice(index, 1, "X");
      event.target.textContent = "X";
    } else return;
  };
  const playO = function (event) {
    gameText = `turn X`;
    let index = event.target.dataset.index;
    if (gameArray[index] === "") {
      gameArray.splice(index, 1, "O");
      event.target.textContent = "O";
    } else return;
  };
  ////////////////////////////////////////////////////////////////

  const winnerCheck = function () {
    for (let i = 0; i < 8; i++) {
      let win = winConditions[i];
      let a = gameArray[win[0]];
      let b = gameArray[win[1]];
      let c = gameArray[win[2]];
      if (a === "" || b === "" || c === "") continue;
      if (a === b && b === c) {
        gameOver();
        break;
      }
    }
    if (gameArray.includes("") === false) return draw();
  };
  const gameOver = function () {
    round % 2 === 0 ? (gameText = "O Won") : (gameText = "X won");
    const buttons = document.querySelectorAll(".game-board button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  };
  const draw = function () {
    gameText = "Draw";
  };
  return {};
})();
