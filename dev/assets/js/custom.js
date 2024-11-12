document.addEventListener('DOMContentLoaded', function() {
    new SlimSelect({
        select: '#selectElement',
        placeholder: 'Select an option',
        settings: {
            showSearch: false,  
            placeholderText: "Custom Placeholder Text",
            placeholder: 'Select an option',
          }
    });
});

//textarea symbols amount
const textareasArr = document.querySelectorAll("textarea")
const symbolsAmountCell = document.querySelectorAll(".symbols-amount span")

for (let i = 0; i < textareasArr.length; i++) {
    textareasArr[i].addEventListener("input", function() {
        var value = textareasArr[i].value
        symbolsAmountCell[i].innerHTML = value.length
    })
}

//search-bar selects
const searchBarFilters = document.querySelectorAll(".search-bar select")


searchBarFilters.forEach(el => {
    const idName = "#" + el.id
    
    document.addEventListener('DOMContentLoaded', function() {
        new SlimSelect({
            select: idName,
            placeholder: 'Select an option',
            settings: {
                showSearch: false,  
                placeholderText: "Custom Placeholder Text",
                placeholder: 'Select an option',
              }
        });
    });
});

//calendar, swap button
const dateInputsArr = document.querySelectorAll(".search-bar-filter input");
const dateInputWrapsArr = document.querySelectorAll(".search-bar-filter .date-input-wrap");
const swapBtn = document.querySelector(".swap-button")

for (let i = 0; i < dateInputWrapsArr.length; i++) {
    dateInputWrapsArr[i].addEventListener("click", function() {
        dateInputsArr[i].showPicker()
    })
}

swapBtn?.addEventListener("click", () => {
    
    let first = dateInputsArr[0].value
    let second = dateInputsArr[1].value
    dateInputsArr[0].value = second
    dateInputsArr[1].value = first
})


//burger menu
const burger = document.querySelector(".hamburger")
const BurgerMenu = document.querySelector(".burger-menu")
const header = document.querySelector("header")

function ShowBurgerMenu() {
    BurgerMenu.classList.toggle("show")
    document.querySelector("body").classList.toggle("overflow-hidden")
    burger.classList.toggle("is-active")
}
function removeClass() {
    BurgerMenu.classList.remove("show")
}

burger.addEventListener("click", ShowBurgerMenu)

//tel mask

var telInputs = document.querySelectorAll('#phone');

var maskOptions = {
    mask: '+380(00-0000-00)',
} 

telInputs.forEach(el => {
    var mask = IMask(el, maskOptions)
})
