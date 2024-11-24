const profileIcon = document.getElementById("profile-dropdown-trigger");
const dropdownContent = document.querySelector(".dropdown-content");

profileIcon.addEventListener("mouseover", () => {
  dropdownContent.style.display = "block";
});

profileIcon.addEventListener("mouseout", () => {
  dropdownContent.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".profile-icon") &&
    !event.target.closest(".dropdown-content")
  ) {
    dropdownContent.style.display = "none";
  }
});

const modal = document.querySelector(".modal");

const logoutLink = document.querySelector(".logout-link");

// Get the buttons
const logoutBtn = document.querySelector(".logout-btn");
const continueBtn = document.querySelector(".continue-btn");
const loggerOff = document.querySelector(".loggeroff");
// When the logout link is clicked, display the modal
loggerOff.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action (page navigation)
  modal.style.display = "flex"; // Show the modal
});

// When the continue button is clicked, hide the modal
continueBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When clicking outside the modal, close it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// If "Log Out" is clicked, you can handle actual logout logic here
logoutBtn.addEventListener("click", function () {
  modal.style.display = "none";
  window.location.href = "../index.html";
  // Close the modal after logout
});
