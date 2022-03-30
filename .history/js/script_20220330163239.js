const input = document.querySelectorAll(".input");

function focusFuns() {
    let parent = this.parentNode;
    parent.classlist.add("focus");
}
function blurFunc() {
    let parent = this.parentNode;
    parent.classList.remove("focus");
}

input.forEach((input) => {
    input.addEventListener("focus", focusFunc);
});