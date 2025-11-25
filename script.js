console.log("How to make an iceberg diagram look good");
// This is the main JavaScript file for the Interactive Graphic Design project.

const dragon = document.getElementById('dragon'); //made by looking at stuff that google gave me
let dragging = false;
let initX, initY, offX, offY;

dragon.addEventListener('mousedown', (e) => {
  dragging = true;
  initX = e.clientX;
  initY = e.clientY;
  offX = dragon.offsetLeft;
  offY = dragon.offsetTop;
  dragon.style.cursor = 'grabbing';
	console.log("mousedown");
});

document.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  const dx = e.clientX - initX;
  const dy = e.clientY - initY;
  dragon.style.left = `${offX + dx}px`;
  dragon.style.top = `${offY + dy}px`;
	console.log("mousemove");
});

document.addEventListener('mouseup', () => {
  dragging = false;
  dragon.style.cursor = 'grab';
	console.log("mouseup");
});