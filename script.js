const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const toggleButton = document.querySelector(".theme-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
  });
}
// =========================
// DARK MODE TOGGLE
// =========================

const toggleBtn = document.querySelector(".theme-toggle");
const body = document.body;

// Load theme sebelumnya
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle dark mode saat ikon diklik
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Simpan preferensi user
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

<<<<<<< HEAD

=======
>>>>>>> 5eb838853d9135c13774df991f5a60e079d0ce69
