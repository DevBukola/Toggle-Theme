const themeIcon = document.getElementById("theme-icon");
const themeText = document.querySelector(".theme-text");

themeText.textContent = "Light theme";

themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList = "fa-regular fa-sun";
    themeText.textContent = "Dark theme";
  } else {
    themeIcon.classList = "fa-solid fa-moon";
    themeText.textContent = "Light theme";
  }
});
