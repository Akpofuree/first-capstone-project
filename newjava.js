/* const parentLogin = document.querySelector(".parent-login");
const tutorLogin = document.querySelector(".tutor-login");  
const kidscontent = document.querySelector("kids-content");
const parentcontent = document.querySelector("parent-content");

const kids = document.querySelector(".kids");
const justadd = document.querySelector(".justadd");
const row = document.querySelector(".row");
const surrounder = document.querySelector(".surrounder");
const adding = document.querySelector(".adding");
const hiiden = document.querySelector(".hidden");

parentLogin.addEventListener("click", function () {
  kidscontent.style.display = "none";
  parentcontent.style.display = "block";
 
  kids.style.display = "none";
  kids.style.display = "flex";

    justadd.style.display = "none";
   
});

tutorLogin.addEventListener("click", function () {
   kidscontent.style.display = "block";
  parentcontent.style.display = "none";
    kids.style.display = "none";
  surrounder.style.display = "none";
});
 */ /* 
const kidsSection = document.querySelector(".kids");
const parentSection = document.querySelector(".parent");
const parentLogin = document.querySelector(".parent-login");
const tutorLogin = document.querySelector(".tutor-login");

function showSection(section) {
  section.classList.remove("hidden");
}

function hideSections() {
  const sections = document.querySelectorAll(".content-section section");
  sections.forEach((section) => section.classList.add("hidden"));
}

parentLogin.addEventListener("click", function () {
  hideSections();
  showSection(kidsSection);
});

tutorLogin.addEventListener("click", function () {
  hideSections();
  showSection(parentSection);
});
 */ const kidsSection = document.querySelector(".kids");
const parentSection = document.querySelector(".parent");
const parentLogin = document.querySelector(".parent-login");
const tutorLogin = document.querySelector(".tutor-login");
const removeBlue = document.getElementById("colorblue");
// Initially show the "Kids" section
kidsSection.classList.remove("hidden");
parentLogin.classList.add("active");

parentLogin.addEventListener("click", function () {
  kidsSection.classList.remove("hidden");
  parentSection.classList.add("hidden");
  parentLogin.classList.add("active");
  tutorLogin.classList.remove("active");
});

tutorLogin.addEventListener("click", function () {
  kidsSection.classList.add("hidden");
  parentSection.classList.remove("hidden");
  parentLogin.classList.remove("active");
  tutorLogin.classList.add("active");
  tutorLogin.style.backgroundColor = "lightblue";
  removeBlue.style.backgroundColor = "blue";
});
const profileIcon = document.getElementById("profilopdown-content");
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
const form = document.querySelector("form");
const responseText = document.querySelector(".responsetext");
const buttoner = document.querySelector(".buttoner");
responseFeedBtn = document.querySelector(".responsefeed");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  // Hide the response message after 5 seconds
  setTimeout(() => {
    responseText.classList.add("hidden"); // Add the hiding class back
  }, 5000);
});

// Click event listener for the "Continue" button (outside submit)
buttoner.addEventListener("click", () => {
  responseText.style.display = "flex";
  form.reset();
});
responseFeedBtn.addEventListener("click", () => {
  responseText.style.display = "none";
});
