// Handle font weight with mouse
const body = document.body;
let maxWidth = window.innerWidth;
const h1 = document.querySelector("h1");

window.addEventListener("resize", () => {
  maxWidth = window.innerWidth;
  changeEventListener(maxWidth);
});

function changeEventListener(maxWidth) {
  if(maxWidth > 768) {
    body.addEventListener("mousemove", (e) => handlePointerMove(e.clientX));
  } else {
    body.addEventListener("touchmove", (e) => handlePointerMove(e.touches[0].clientX));
  }
}


function handleMouseMove(clientX) {
  // Get the percentage on X of the mouse
  let xPercentage = (clientX * 100) / maxWidth;
  // Produit en croix, and add +100 to get a range between 100 and 900
  let progress = ((xPercentage * 800) / 100) + 100;
  
  h1.style.fontVariationSettings = `'wght' ${Math.round(progress)}`;
}