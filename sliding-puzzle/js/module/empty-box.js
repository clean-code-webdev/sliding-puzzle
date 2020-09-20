function checkIfBoxIsEmpty() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    if (box.innerText >= 1) {
      box.style.background = "#f1f3f6";
      box.classList.remove("empty");
      box.removeAttribute("ondrop");
      box.removeAttribute("ondragover");
    } else {
      box.style.background = "#191919";
      box.classList.add("empty");
      box.setAttribute("ondrop", "drop(event)");
      box.setAttribute("ondragover", "allowDrop(event)");
    }
  });
}

export { checkIfBoxIsEmpty };
