function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  const profile = document.querySelector(".profile");

  if (!profile.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});

const modal = document.querySelector(".modal");

const logoutLink = document.querySelector(".logout-link");

// Get the buttons
const logoutBtn = document.querySelector(".logout-btn");
const continueBtn = document.querySelector(".continue-btn");
const loggerOff = document.querySelector(".logout");
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
  window.location.href = "index.html";
  // Close the modal after logout
});
