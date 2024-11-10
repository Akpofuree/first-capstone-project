// script.js
const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach((bar, index) => {
  const progressPercentage = bar.style.width;
  const progressValue = parseFloat(progressPercentage) / 100;

  // Adjust border-radius based on progress value (e.g., linear interpolation)
  const borderRadius = progressValue * 5 + "px";
  bar.style.borderRadius = borderRadius + " " + borderRadius;
});
// Assuming you have a variable 'progressPercentage' to store the progress value
const progressBarInner = document.querySelector(".progress-bar-inner");
progressBarInner.style.width = progressPercentage + "%";

const progressText = document.querySelector(".progress-text");
progressText.textContent = progressPercentage + "% Complete";
