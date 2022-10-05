let el = document.querySelector(".box");
let newPosX = 0,
  newPosY = 0,
  startPosX = 0,
  startPosY = 0;

// when the user clicks down on the element
el.addEventListener("mousedown", function (e) {
  e.preventDefault();

  // get the starting position of the cursor
  startPosX = e.clientX;
  startPosY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
});

function mouseMove(e) {
  // calculate the new position
  newPosX = startPosX - e.clientX;
  newPosY = startPosY - e.clientY;

  // with each move we also want to update the start X and Y
  startPosX = e.clientX;
  startPosY = e.clientY;

  // set the element's new position:
  if (el.offsetTop >= 0 && el.offsetTop <= el.parentNode.clientHeight - 50) {
    el.style.top = el.offsetTop - newPosY + "px";
  } else if (newPosY <= 0 && el.offsetTop <= el.parentNode.clientHeight - 50) {
    el.style.top = el.offsetTop - newPosY + "px";
  } else if (newPosY >= 0 && el.offsetTop > el.parentNode.clientHeight - 50) {
    el.style.top = el.offsetTop - newPosY + "px";
  }
  if (el.offsetLeft >= 0 && el.offsetLeft <= el.parentNode.clientWidth - 50) {
    el.style.left = el.offsetLeft - newPosX + "px";
  } else if (newPosX <= 0 && el.offsetLeft <= el.parentNode.clientWidth - 50) {
    el.style.left = el.offsetLeft - newPosX + "px";
  } else if (newPosX >= 0 && el.offsetLeft > el.parentNode.clientWidth - 50) {
    el.style.left = el.offsetLeft - newPosX + "px";
  }
}

function mouseUp() {
  if (
    el.offsetTop > el.parentNode.clientHeight ||
    el.offsetTop < -40 ||
    el.offsetLeft < -40 ||
    el.offsetLeft > el.parentNode.clientWidth
  ) {
    el.style.top = 50 + "px";
    el.style.left = 50 + "px";
  }
  document.removeEventListener("mousemove", mouseMove);
}
