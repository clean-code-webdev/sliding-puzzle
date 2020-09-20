function handle_drag_and_drop_attributes() {
  let h3 = document.querySelectorAll("h3");

  h3.forEach((h) => {
    let color = h.parentElement.style.color;

    if (color !== "black") {
      h.setAttribute("draggable", "true");
      h.setAttribute("ondragstart", "drag(event)");
    }

    if (color === "black") {
      h.removeAttribute("draggable");
      h.removeAttribute("ondragstart");
    }
  });
}

export { handle_drag_and_drop_attributes };
