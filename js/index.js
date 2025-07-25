const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.querySelector(".icon");

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuIcon.src = isOpen
    ? "./assets/close_white_36dp.svg"
    : "./assets/menu_white_36dp.svg";
});
