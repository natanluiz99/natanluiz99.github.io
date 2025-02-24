document.addEventListener('DOMContentLoaded', () => {
    const desktop = new OS.GUI.Desktop('desktop');

    // Exemplo de janela do Notepad
    const notepad = new OS.GUI.Window({
        title: 'Notepad',
        width: 400,
        height: 300,
        content: '<textarea style="width: 100%; height: 100%;"></textarea>'
    });
    desktop.createWindow(notepad);

    // Exemplo de janela do Terminal
    const terminal = new OS.GUI.Window({
        title: 'Terminal',
        width: 500,
        height: 300,
        content: '<div id="terminal" style="width: 100%; height: 100%; background: black; color: white; padding: 10px; overflow: auto;"></div>'
    });
    desktop.createWindow(terminal);

    // Exemplo de gerenciador de arquivos
    const fileManager = new OS.GUI.Window({
        title: 'File Manager',
        width: 600,
        height: 400,
        content: '<div id="file-manager" style="width: 100%; height: 100%;"></div>'
    });
    desktop.createWindow(fileManager);
});

const terminalElement = document.getElementById('terminal');

function terminalCommand(command) {
    switch (command) {
        case 'help':
            terminalElement.innerHTML += 'Comandos disponíveis: help, clear, ls<br>';
            break;
        case 'clear':
            terminalElement.innerHTML = '';
            break;
        case 'ls':
            terminalElement.innerHTML += 'arquivo1.txt<br>arquivo2.jpg<br>';
            break;
        default:
            terminalElement.innerHTML += `Comando não encontrado: ${command}<br>`;
    }
}

// Simulação de input
terminalElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = e.target.innerText.split('\n').pop().trim();
        terminalCommand(command);
    }
});

const fileManagerElement = document.getElementById('file-manager');

const files = [
    { name: 'imagem1.jpg', type: 'image', path: 'assets/images/imagem1.jpg' },
    { name: 'video1.mp4', type: 'video', path: 'assets/videos/video1.mp4' },
    { name: 'gif1.gif', type: 'gif', path: 'assets/gifs/gif1.gif' }
];

files.forEach(file => {
    const fileElement = document.createElement('div');
    fileElement.innerText = file.name;
    fileElement.style.cursor = 'pointer';
    fileElement.addEventListener('click', () => {
        if (file.type === 'image') {
            window.open(file.path, '_blank');
        } else if (file.type === 'video') {
            window.open(file.path, '_blank');
        } else if (file.type === 'gif') {
            window.open(file.path, '_blank');
        }
    });
    fileManagerElement.appendChild(fileElement);
});

function openNotepad() {
    const notepad = new OS.GUI.Window({
        title: 'Notepad',
        width: 400,
        height: 300,
        content: '<textarea style="width: 100%; height: 100%;"></textarea>'
    });
    desktop.createWindow(notepad);
    addTaskbarIcon('Notepad', notepad);
}

function openMediaViewer(type) {
    let title, content;
    if (type === 'image') {
        title = 'Visualizador de Fotos';
        content = '<img src="assets/images/imagem1.jpg" style="width: 100%; height: 100%; object-fit: contain;">';
    } else if (type === 'video') {
        title = 'Visualizador de Vídeos';
        content = '<video src="assets/videos/video1.mp4" controls style="width: 100%; height: 100%;"></video>';
    } else if (type === 'gif') {
        title = 'Visualizador de GIFs';
        content = '<img src="assets/gifs/gif1.gif" style="width: 100%; height: 100%; object-fit: contain;">';
    }

    const mediaViewer = new OS.GUI.Window({
        title: title,
        width: 600,
        height: 400,
        content: content
    });
    desktop.createWindow(mediaViewer);
    addTaskbarIcon(title, mediaViewer);
}

function openTerminal() {
    const terminal = new OS.GUI.Window({
        title: 'Terminal',
        width: 500,
        height: 300,
        content: '<div id="terminal" style="width: 100%; height: 100%; background: black; color: white; padding: 10px; overflow: auto;"></div>'
    });
    desktop.createWindow(terminal);
    addTaskbarIcon('Terminal', terminal);
}

function addTaskbarIcon(title, window) {
    const taskbarIcons = document.getElementById('taskbar-icons');
    const icon = document.createElement('div');
    icon.className = 'taskbar-icon';
    icon.innerHTML = `<img src="assets/icons/${title.toLowerCase()}.png" alt="${title}">`;
    icon.addEventListener('click', () => {
        window.focus();
    });
    taskbarIcons.appendChild(icon);
}
