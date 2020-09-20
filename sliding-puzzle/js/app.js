import * as createPieces from "./module/create-pieces.js";
import * as emptySpace from "./module/empty-space.js";
import * as emptyBox from "./module/empty-box.js";
import * as checkWin from "./module/check-win.js";
import * as piecePosition from "./module/piece-position.js";
import * as handleDragDropAttribute from "./module/drag-drop-attribute-handler.js";
import * as timer from "./module/timer.js";

function playingNotPossible() {
  if (window.innerWidth < 1200) {
    document.body.innerHTML = `
    <div id="not-available">
      <h2>Notice! <br> This game is a demo of JavaScript code and does not focus on CSS. To play it, please, open it on a pc or mac.</h2>
    </div>`;
    return;
  }
}

function init() {
  if (window.innerWidth < 1200) {
    playingNotPossible();
    return;
  }

  createPieces.createPieces();
  createPieces.numberPieces();

  emptySpace.editEmptySpaceForPieces();

  checkWin.checkifPlayerWins();

  timer.count_time();

  // run game
  setInterval(() => {
    piecePosition.check_pieces_position();
    emptyBox.checkIfBoxIsEmpty();
    handleDragDropAttribute.handle_drag_and_drop_attributes();
  }, 100);
}

init();
