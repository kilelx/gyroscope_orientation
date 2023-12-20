/*

// Handle font weight with mouse
const body = document.body;
const maxWidth = window.innerWidth;
const h1 = document.querySelector("h1");

body.addEventListener("mousemove", (e) => handleMouseMove(e));

function handleMouseMove(e) {
  let mouseX = e.clientX;
  // Get the percentage on X of the mouse
  let xPercentage = (mouseX * 100) / maxWidth;
  // Produit en croix, and add +100 to get a range between 100 and 900
  let progress = ((xPercentage * 800) / 100) + 100;
  console.log(progress)
  
  h1.style.fontVariationSettings = `'wght' ${Math.round(progress)}`;
}
*/

// alpha : rotation autour de l'axe z
// gamma : de gauche à droite
// bêta : mouvement avant-arrière

const h1 = document.querySelector("h1");

function handleOrientation(e) {
    // console.log(e.alpha);

    let currentAlpha = e.alpha;

    let alphaPercentage = ((Math.min(Math.max(currentAlpha, -30), 30) + 30) / 60) * 100;
    // if(currentAlpha > 30) {
    //     currentAlpha = 30;
    // } else if(currentAlpha < -30) {
    //     currentAlpha = -30;
    // }
    // Produit en croix, and add +100 to get a range between 100 and 900
    let progress = ((alphaPercentage * 800) / 100) + 100;
    
    h1.style.fontVariationSettings = `'wght' ${Math.round(progress)}`;

    console.log(progress);
  }
  // async function requestDeviceOrientation() {
  //   if(typeof DeviceOrientationEvent != undefined && typeof DeviceOrientationEvent.requestPermission === 'function') {
  //   // Check if the phone is iOs 13 or higher
      
  //   } else if('DeviceOrientationEvent' in window) {
  //     // Not iOs 13
  //     window.addEventListener('deviceorientation', handleOrientation)

  //   } else {
  //     // Not supported at all
  //   }
  // }

async activateGyro() {
  return new Promise((resolve, reject) => {
    if(typeof DeviceOrientationEvent != undefined && typeof DeviceOrientationEvent.requestPermission === 'function') {

      // If a gyroscope exists, ask the permission to use it
      DeviceOrientationEvent.requestPermission()
        .then(res => {
          if(res === "granted") {
            window.addEventListener("deviceorientation", handleOrientation(e))
          }

          resolve();
        })
        .catch(reject)
    }
  })
}

document.addEventListener("click", async() => {await activateGyro()})