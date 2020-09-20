function createPieces() {
  let playingArea = document.querySelector("#playing-area");

  for (let i = 1; i <= 16; i++) {
    playingArea.innerHTML += `<div class="box"></div>`;
  }
}

function numberPieces() {
  let pieces = document.querySelectorAll(".box");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  shuffle(numbers);

  for (let i = 1; i < pieces.length; i++) {
    let piece = pieces[i];
    piece.innerHTML = `<h3 id="n-${i}">${numbers[i - 1]}</h3>`;
  }

  function shuffle(numbers) {
    numbers.sort(() => Math.random() - 0.5);
  }
}

export { createPieces, numberPieces };
