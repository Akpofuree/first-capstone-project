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
