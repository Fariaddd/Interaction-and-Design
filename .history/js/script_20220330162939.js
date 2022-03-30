const input = document.querySelectorAll(".input");

input.forEach((input) => {
    input.addEventListener("focus", focusFunc);
});