let square = document.querySelector("#square");

document.addEventListener("keydown", function (e) {
  if (e.shiftKey) {
    if (e.code == "ArrowUp") {
      square.style.top = parseInt(getComputedStyle(square).top) - 10 + "px";
    } else if (e.code === "ArrowDown") {
      square.style.top = parseInt(getComputedStyle(square).top) + 10 + "px";
    } else if (e.code === "ArrowRight") {
      square.style.left = parseInt(getComputedStyle(square).left) + 10 + "px";
    } else if (e.code === "ArrowLeft") {
      square.style.left = parseInt(getComputedStyle(square).left) - 10 + "px";
    }
  } else {
    if (e.code == "ArrowUp") {
      square.style.top = parseInt(getComputedStyle(square).top) - 1 + "px";
    } else if (e.code === "ArrowDown") {
      square.style.top = parseInt(getComputedStyle(square).top) + 1 + "px";
    } else if (e.code === "ArrowRight") {
      square.style.left = parseInt(getComputedStyle(square).left) + 1 + "px";
    } else if (e.code === "ArrowLeft") {
      square.style.left = parseInt(getComputedStyle(square).left) - 1 + "px";
    }
  }
});
