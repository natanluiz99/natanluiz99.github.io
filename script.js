document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.addEventListener("mousedown", dragElement);
    });
});

function dragElement(event) {
    event.preventDefault();
    let element = event.target.closest(".icon");
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;
    
    function moveAt(x, y) {
        element.style.left = x - shiftX + "px";
        element.style.top = y - shiftY + "px";
    }
    
    function onMouseMove(event) {
        moveAt(event.clientX, event.clientY);
    }
    
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }, { once: true });
}
