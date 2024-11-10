document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".ma"); // Select the form
  const usernameInput = document.getElementById("email"); // Select username input
  const passwordInput = document.getElementById("password"); // Select password input
  const submitButton = document.querySelector(".button1"); // Select submit button

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim(); // Get username, trim whitespace
    const password = passwordInput.value.trim(); // Get password, trim whitespace

    // Basic validation (add more as needed)
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    // Send AJAX request to server-side script (replace with your server-side URL)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect to dashboard or protected area (replace with your redirect URL)
          window.location.href = "/dashboard";
        } else {
          alert(data.message); // Display error message
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later."); // Display generic error
      });
  });
});
