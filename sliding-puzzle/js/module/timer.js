function count_time() {
  let timer = document.querySelector("#timer");
  let counter = 300;

  setInterval(() => {
    let min = Math.floor(counter / 60);
    let sec = Math.floor(counter % 60);

    counter -= 1;

    // add zero to sec if sec < 10
    if (sec < 10) sec = `0${sec}`;

    // add zero to min if min < 10
    if (min < 10) min = `0${min}`;

    timer.innerHTML = `<span id="min">${min}</span> <span>:</span> <span id="sec">${sec}</span>`;

    change_time_color(timer);

    game_over(counter);

    // handle game over
    function game_over(counter) {
      if (counter < 0) {
        deletePieces();
        displayGameOverMessage();

        // delete pieces
        function deletePieces() {
          let h3 = document.querySelectorAll(".box > h3");
          for (let i = 0; i < h3.length; i++) {
            h3[i].remove();
          }
        }

        // TODO change this function. It's the same as the displayWinMessage() in check-win.js
        // display a game over message
        // change time into a 'Time's up!' message
        function displayGameOverMessage() {
          timer.style.display = "block";
          timer.style.width = "50vw";
          timer.style.opacity = "1";
          timer.innerHTML = `Time's Up!`;
        }
      }
    }

    // change time color based on how many minutes have passed
    function change_time_color() {
      // 1:30
      if (counter < 180) timer.style.color = "yellow";
      // if (counter > 90) timer.style.color = "yellow";
      // 3:00
      if (counter < 120) timer.style.color = "orange";
      // if (counter > 180) timer.style.color = "orange";
      // 4:00
      if (counter < 60) timer.style.color = "red";
      // if (counter > 240) timer.style.color = "red";
      // 4:30
      if (counter < 30) {
        timer.style.opacity = "0";
        setTimeout(() => {
          timer.style.opacity = "1";
        }, 500);
      }
    }
  }, 1000);
}

export { count_time };
