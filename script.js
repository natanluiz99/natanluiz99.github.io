function openWindow(app) {
    let windowEl = document.createElement("div");
    windowEl.classList.add("window");
    windowEl.innerHTML = `
        <div class="window-header">
            <span>${app}</span>
            <button onclick="this.parentElement.parentElement.remove()">X</button>
        </div>
        <div class="window-body">
            ${app === "notepad" ? "<textarea></textarea>" : ""}
            ${app === "terminal" ? "<div id='terminal'></div>" : ""}
        </div>
    `;
    document.body.appendChild(windowEl);

    // Deixar a janela arrastável
    makeDraggable(windowEl);
}

function makeDraggable(el) {
    let isDragging = false, offsetX, offsetY;
    el.querySelector(".window-header").addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            el.style.left = `${e.clientX - offsetX}px`;
            el.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", () => { isDragging = false; });
}
