let click = document.querySelector(".clickme");
let count = 0;
let number = document.querySelector("#Count");
click.addEventListener("click", () => {
    count++;
    number.textContent = count;
});