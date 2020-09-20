function checkifPlayerWins() {
  let x = setInterval(() => {
    let arrangedArray = [];
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      arrangedArray.push(box.innerText);
    });

    let y = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "",
    ];

    if (arrangedArray.toString() == y) {
      clearInterval(x);
      // alert("win");

      // TODO change this function. It's the same as the displayGameOverMessage() in times.js
      displayWinMessage();

      // display a win message
      // change time into a 'You Win!' message
      function displayWinMessage() {
        timer.style.display = "block";
        timer.style.width = "50vw";
        timer.style.opacity = "1";
        timer.innerHTML = `You Win!`;
        timer.style.color = "yellow";
      }
    }
  }, 200);
}

export { checkifPlayerWins };
