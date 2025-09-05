// ----------------------------
// Part 1: Event Handling
// ----------------------------
document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").textContent = "🎉 You clicked the button!";
});

// ----------------------------
// Part 2: Interactive Elements
// ----------------------------

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  document.getElementById("count").textContent = count;
});

// Collapsible FAQ
document.querySelector(".faq-question").addEventListener("click", (e) => {
  const answer = e.target.nextElementSibling;
  answer.classList.toggle("hidden");
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting immediately

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messages = [];

  // Validate Name
  if (name.length < 3) {
    messages.push("Name must be at least 3 characters.");
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messages.push("Enter a valid email address.");
  }

  // Validate Password
  if (password.length < 6) {
    messages.push("Password must be at least 6 characters.");
  }

  // Show messages
  const messageDiv = document.getElementById("formMessages");
  if (messages.length > 0) {
    messageDiv.innerHTML = messages.map(msg => `<p style="color:red">${msg}</p>`).join("");
  } else {
    messageDiv.innerHTML = `<p style="color:green">✅ Form submitted successfully!</p>`;
  }
});
