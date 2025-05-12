// Função para abrir o gerenciador de arquivos
function abrirGerenciadorArquivos() {
    const fileManagerWindow = new $Window({
        title: 'Gerenciador de Arquivos',
        width: 800,
        height: 600,
        closeButton: true,
        minimizeButton: true,
        maximizeButton: true,
        resizable: true,
    });

    const content = document.createElement('div');
    content.id = 'file-manager-content';
    fileManagerWindow.$content.append(content);

    // Adicionar a estrutura do gerenciador de arquivos
    content.innerHTML = `
        <div class="toolbars">
            <div class="toolbar">
                <div class="toolbar-drag-handle"></div>
                <div id="standard-buttons">
                    <button class="toolbar-button" title="Voltar">
                        <span class="icon"></span>
                        <span class="label-text">Voltar</span>
                    </button>
                    <button class="toolbar-button" title="Avançar">
                        <span class="icon"></span>
                        <span class="label-text">Avançar</span>
                    </button>
                </div>
                <hr aria-orientation="vertical">
                <div id="address-bar">
                    <div id="address-compound-input">
                        <span id="address-icon">📁</span>
                        <input id="address" type="text" readonly>
                    </div>
                    <button id="address-dropdown-button" class="toolbar-dropdown-button">▼</button>
                </div>
            </div>
        </div>
        <div id="content">
            <div id="file-list"></div>
        </div>
        <div id="status-bar">
            <div id="status-bar-left">Itens: 0</div>
            <div id="status-bar-middle"></div>
            <div id="status-bar-right">Pronto</div>
        </div>
    `;

    // Função para carregar e exibir os arquivos
    function carregarArquivos() {
        fetch('/api/videos') // Substitua pelo endpoint correto
            .then(response => response.json())
            .then(data => {
                const fileList = content.querySelector('#file-list');
                fileList.innerHTML = '';

                data.files.forEach(arquivo => {
                    const fileItem = document.createElement('div');
                    fileItem.textContent = arquivo.name;
                    fileItem.style.cursor = 'pointer';
                    fileItem.style.marginBottom = '5px';

                    fileItem.addEventListener('click', () => {
                        window.open(arquivo.url, '_blank');
                    });

                    fileList.appendChild(fileItem);
                });

                // Atualizar a barra de status
                const statusBarLeft = content.querySelector('#status-bar-left');
                statusBarLeft.textContent = `Itens: ${data.files.length}`;
            })
            .catch(error => {
                console.error('Erro ao carregar os arquivos:', error);
            });
    }

    // Carregar os arquivos inicialmente
    carregarArquivos();

    // Atualizar a lista de arquivos a cada 5 segundos
    const intervalo = setInterval(carregarArquivos, 5000);

    // Parar o intervalo quando a janela for fechada
    fileManagerWindow.on('closed', () => {
        clearInterval(intervalo);
    });

    // Centralizar a janela
    fileManagerWindow.center();
}

var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Configuração do efeito Matrix
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 33);

document.addEventListener('DOMContentLoaded', () => {
    const fileManagerIcon = document.getElementById('file-manager-icon');
    fileManagerIcon.addEventListener('click', () => {
        abrirGerenciadorArquivos();
    });
});

// Lógica de arrastar e abrir janelas
document.addEventListener('DOMContentLoaded', () => {
    // Função para tornar um ícone arrastável
    function makeDraggable(icon) {
        let isDragging = false;
        let offsetX, offsetY;

        icon.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; // Botão esquerdo = 0

            isDragging = false;
            offsetX = e.clientX - icon.offsetLeft;
            offsetY = e.clientY - icon.offsetTop;
            icon.style.cursor = 'grabbing';

            const handleMove = (e) => {
                if (!isDragging && (Math.abs(e.clientX - offsetX) > 5 || Math.abs(e.clientY - offsetY) > 5)) {
                    isDragging = true; // Agora está arrastando
                }
                if (isDragging) {
                    icon.style.left = `${e.clientX - offsetX}px`;
                    icon.style.top = `${e.clientY - offsetY}px`;
                }
            };

            const handleUp = () => {
                document.removeEventListener('mousemove', handleMove);
                document.removeEventListener('mouseup', handleUp);
                icon.style.cursor = 'grab';
            };

            document.addEventListener('mousemove', handleMove);
            document.addEventListener('mouseup', handleUp);
        });

        // Evita abrir a janela ao arrastar
        icon.addEventListener('click', () => {
            if (!isDragging) {
                if (icon.id === 'program-icon') {
                    abrirTerminal();
                } else if (icon.id === 'documentos-icon') {
                    abrirPasta('documentos');
                } else if (icon.id === 'videos-icon') {
                    abrirPasta('videos');
                }
            }
        });
    }

    // Aplicar a lógica de arrastar a todos os ícones
    const icons = document.querySelectorAll('.desktop-icon');
    icons.forEach(icon => makeDraggable(icon));

    // Função para abrir o terminal
    function abrirTerminal() {
        const terminalWindow = new $Window({
            title: 'Terminal',
            width: 600,
            height: 400,
            closeButton: true,
            minimizeButton: true,
            maximizeButton: true,
            resizable: true,
        });

        const terminalElement = document.createElement('div');
        terminalElement.id = 'terminal';
        terminalWindow.$content.append(terminalElement);

        const terminal = new Terminal({
            cursorBlink: true,
            theme: {
                background: '#000',
                foreground: '#0f0',
            },
        });

        const fitAddon = new FitAddon.FitAddon();
        terminal.loadAddon(fitAddon);

        terminal.open(terminalElement);
        fitAddon.fit();

        terminal.onData((data) => {
            terminal.write(data);
        });

        terminal.writeln('Bem-vindo ao Terminal do Windows 53!');
        terminal.writeln('Digite "help" para ver os comandos disponíveis.');

        terminal.onData((data) => {
            if (data === '\r') {
                const command = terminal.buffer.active.getLine(terminal.buffer.active.cursorY).translateToString().trim();
                terminal.writeln('');
                handleCommand(command);
            }
        });

        function handleCommand(command) {
            switch (command) {
                case 'help':
                    terminal.writeln('Comandos disponíveis:');
                    terminal.writeln('- help: Exibe esta mensagem.');
                    terminal.writeln('- clear: Limpa o terminal.');
                    terminal.writeln('- matrix: Ativa/desativa o efeito Matrix.');
                    break;
                case 'clear':
                    terminal.clear();
                    break;
                case 'matrix':
                    terminal.writeln('Efeito Matrix alternado.');
                    break;
                default:
                    terminal.writeln(`Comando não reconhecido: ${command}`);
                    break;
            }
        }

        window.addEventListener('resize', () => {
            fitAddon.fit();
        });

        terminalWindow.center();
    }

    // Função para abrir uma pasta
    function abrirPasta(nomePasta) {
        const pastaWindow = new $Window({
            title: nomePasta.charAt(0).toUpperCase() + nomePasta.slice(1),
            width: 600,
            height: 400,
            closeButton: true,
            minimizeButton: true,
            maximizeButton: true,
            resizable: true,
        });

        const content = document.createElement('div');
        content.style.padding = '10px';
        pastaWindow.$content.append(content);

        // Simular listagem de arquivos (substitua por uma requisição real ao servidor)
        const arquivos = nomePasta === 'documentos' 
            ? ['arquivo1.txt', 'arquivo2.pdf', 'arquivo3.docx']
            : ['video1.mp4', 'video2.mp4', 'video3.mp4'];

        arquivos.forEach(arquivo => {
            const fileItem = document.createElement('div');
            fileItem.textContent = arquivo;
            fileItem.style.cursor = 'pointer';
            fileItem.style.marginBottom = '5px';

            fileItem.addEventListener('click', () => {
                alert(`Abrindo arquivo: ${arquivo}`);
            });

            content.appendChild(fileItem);
        });

        pastaWindow.center();
    }
});