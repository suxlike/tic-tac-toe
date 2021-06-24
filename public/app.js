const playersModule = (function () {
  /////////CHACHE
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelector(".game-board");
  /////////
  let buttonClickHandler = function (event) {
    playX(event);
  };

  /////////SET BUTTONS
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
    console.log(gameArray);
    event.target.textContent = "X";
  };
  const playY = function (event) {
    let index = event.target.dataset.index;
    gameArray.splice(index, 1, "Y");
    console.log(gameArray);
    event.target.textContent = "Y";
  };

  return {};
})();
