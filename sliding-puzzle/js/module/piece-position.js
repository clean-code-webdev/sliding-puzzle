function check_pieces_position() {
  //   setInterval(() => {
  let boxes = document.querySelectorAll(".box");
  let emptyBox = document.querySelector(".empty");

  let emptyBoxTop = Math.round(emptyBox.getBoundingClientRect().top);
  let emptyBoxBottom = Math.round(emptyBox.getBoundingClientRect().bottom);
  let emptyBoxLeft = Math.round(emptyBox.getBoundingClientRect().left);
  let emptyBoxRight = Math.round(emptyBox.getBoundingClientRect().right);

  for (let i = 0; i < boxes.length; i++) {
    // boxes.forEach((box) => {
    let pieceTop = Math.round(boxes[i].getBoundingClientRect().top);
    let pieceRight = Math.round(boxes[i].getBoundingClientRect().right);
    let pieceBottom = Math.round(boxes[i].getBoundingClientRect().bottom);
    let pieceLeft = Math.round(boxes[i].getBoundingClientRect().left);

    check_wether_pieces_are_on_the_left_or_right_sides_of_the_empty_space();
    check_wether_pieces_are_under_the_empty_space();
    check_wether_pieces_are_on_the_top_of_the_empty_space();

    function check_wether_pieces_are_under_the_empty_space() {
      if (emptyBoxBottom === pieceTop) {
        if (emptyBoxLeft === pieceLeft && emptyBoxRight === pieceRight) {
          boxes[i].style.color = "red";
        }
      }
    }

    function check_wether_pieces_are_on_the_top_of_the_empty_space() {
      if (emptyBoxTop === pieceBottom) {
        if (emptyBoxLeft === pieceLeft && emptyBoxRight === pieceRight) {
          boxes[i].style.color = "red";
        }
      }
    }

    function check_wether_pieces_are_on_the_left_or_right_sides_of_the_empty_space() {
      if (emptyBoxTop === pieceTop) {
        // empty left / piece right
        if (emptyBoxRight === pieceLeft) {
          boxes[i].style.color = "red";
        } // empty right / piece left
        else if (emptyBoxLeft === pieceRight) {
          boxes[i].style.color = "red";
        } else {
          boxes[i].style.color = "black";
        }
      }
      //
      else {
        boxes[i].style.color = "black";
      }
    }
    // });
  }
}

export { check_pieces_position };
