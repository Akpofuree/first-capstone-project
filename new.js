const parentLoginButton = document.querySelector(".parent-login");
const tutorLoginButton = document.querySelector(".tutor-login");
const contentSections = document.querySelectorAll(".content-section");

function showSection(section) {
  section.classList.remove("hidden");
}

function hideAllSections() {
  contentSections.forEach((section) => section.classList.add("hidden"));
}

parentLoginButton.addEventListener("click", function () {
  hideAllSections();
  showSection(contentSections[1]); // Access the second section (index 1) for parents
  parentLoginButton.classList.add("active");
  tutorLoginButton.classList.remove("active");
});

tutorLoginButton.addEventListener("click", function () {
  hideAllSections();
  showSection(contentSections[0]); // Access the first section (index 0) for kids
  parentLoginButton.classList.remove("active");
  tutorLoginButton.classList.add("active");
});
