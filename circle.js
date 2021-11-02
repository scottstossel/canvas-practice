const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
let radius;

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  radius = coord.x - canvas.offsetLeft;
  ctx.arc(coord.x, coord.y, radius, 0, 2 * Math.PI, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";

  reposition(event);
  ctx.stroke();
}