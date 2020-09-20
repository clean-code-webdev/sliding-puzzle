function editEmptySpaceForPieces() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    if (box.innerHTML === "") {
      box.classList.add("empty");
      box.setAttribute("ondrop", "drop(event)");
      box.setAttribute("ondragover", "allowDrop(event)");
    }
  });
}

export { editEmptySpaceForPieces };
