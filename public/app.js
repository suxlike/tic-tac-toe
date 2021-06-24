const gameModule = (function () {
  /////////CHACHE
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelector(".game-board");
  let round = 0;
  let a, b, c, rest;
  /////////
  let buttonClickHandler = function (event) {
    round % 2 === 0 ? playX(event) : playO(event);
    round++;
    winnerCheck();
  };

  /////////SET BOARD
  for (let i = 0; i < 9; i++) {
    let button = document.createElement("button");
    button.dataset.index = `${i}`;
    gameBoard.appendChild(button);
    button.addEventListener("click", buttonClickHandler);
  }
  ////////////////////////////////////////////////////////////////
  const playX = function (event) {
    let index = event.target.dataset.index;
    gameArray.splice(index, 1, "X");

    event.target.textContent = "X";
  };
  const playO = function (event) {
    let index = event.target.dataset.index;
    gameArray.splice(index, 1, "O");

    event.target.textContent = "O";
  };
  ////////////////////////////////////////////////////////////////

  const winnerCheck = function () {
    [a, b, c, ...rest] = gameArray;
    console.log(gameArray);
    console.log(["X", "X", "X", ...rest]);
    gameArray == ["X", "X", "X", ...rest]
      ? console.log("win")
      : console.log("not yet");
  };

  return {};
})();
