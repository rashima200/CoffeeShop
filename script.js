const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
    navMenu.style.left = "0"; // Slide-in effect for the menu
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
    navMenu.style.left = "-100%"; // Slide-out effect for the menu
});
