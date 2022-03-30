const input = document.querySelectorAll(".input");

function focusFuns() {
    let parent = this.parentNode;
    parent.classlist.add("focus");
}
function

    input.forEach((input) => {
        input.addEventListener("focus", focusFunc);
    });