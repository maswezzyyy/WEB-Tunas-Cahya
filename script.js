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
<<<<<<< HEAD

=======
>>>>>>> 5eb838853d9135c13774df991f5a60e079d0ce69
