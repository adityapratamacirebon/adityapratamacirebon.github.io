console.log("oke ang");
// Toggle Class Active
const navbarNav = document.querySelector(".navbar_nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger_menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk hilangkan Nav
const hamburger = document.querySelector("#hamburger_menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
