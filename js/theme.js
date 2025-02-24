const button = document.getElementById("toggle-theme");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  sunIcon.classList.remove("d-none");
  moonIcon.classList.add("d-none");
}

button.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    sunIcon.classList.remove("d-none");
    moonIcon.classList.add("d-none");
  }
});
