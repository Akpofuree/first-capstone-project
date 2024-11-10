const toggleButton = document.getElementById("toggleButton");
const parentTestimonials = document.getElementById("parentTestimonials");
const childTestimonials = document.getElementById("childTestimonials");

toggleButton.addEventListener("click", () => {
  if (parentTestimonials.classList.contains("active")) {
    parentTestimonials.classList.remove("active");
    childTestimonials.classList.add("active");
  } else {
    parentTestimonials.classList.add("active");
    childTestimonials.classList.remove("active");
  }
});
