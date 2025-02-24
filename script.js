document.addEventListener('DOMContentLoaded', () => {
    const desktop = new OS.GUI.Desktop('desktop');

    // Função para abrir o Notepad
    window.openNotepad = () => {
        const notepad = new OS.GUI.Window({
            title: 'Notepad',
            width: 400,
            height: 300,
            content: '<textarea style="width: 100%; height: 100%;"></textarea>'
        });
        desktop.createWindow(notepad);
        addTaskbarIcon('Notepad', notepad);
    };

    // Função para abrir o Visualizador de Mídia
    window.openMediaViewer = (type) => {
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
    };

    // Função para abrir o Terminal
    window.openTerminal = () => {
        const terminal = new OS.GUI.Window({
            title: 'Terminal',
            width: 500,
            height: 300,
            content: '<div id="terminal" style="width: 100%; height: 100%; background: black; color: white; padding: 10px; overflow: auto;"></div>'
        });
        desktop.createWindow(terminal);
        addTaskbarIcon('Terminal', terminal);
    };

    // Função para adicionar ícones à barra de tarefas
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
});
