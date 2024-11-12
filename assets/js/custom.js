const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger__menu")

burger.addEventListener("click", () => {
    burgerMenu.classList.toggle("show")
    document.body.classList.toggle("hidden")
})