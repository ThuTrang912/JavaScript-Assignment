// //const sliderWrap = document.querySelector('#slider-wrap');
// const slider = document.querySelectorAll('#slider li');

// let intervalId = null;
// let intervalCount = 0;
// const delay = 3000;
// // const delayTime = 1000;

// function startSlider() {
//   if (!intervalId) {
//     intervalId = setInterval(() => {
//       slider[intervalCount % slider.length].style.display = "none"; 
      
//       slider[intervalCount + 1 % slider.length].style.display="block";
//       intervalCount++;
//     }, delay);
//   }
// }

// startSlider();

const sliderWrap = document.querySelector('#slider-wrap');
const slider = sliderWrap.querySelectorAll('li');

let intervalId = null;
let intervalCount = 0;
const delay = 3000;

function startSlider() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      const currentSlide = slider[intervalCount + 1 % slider.length];
      const previousSlide = slider[(intervalCount + slider.length) % slider.length];
      
      currentSlide.style.display = "block";
      previousSlide.style.display = "none";
      
      intervalCount++;
    }, delay);
  }
}

startSlider();





