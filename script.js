let zIndexCounter = 25;

const janelasInfo = {
  "meu-computador-window": "Meu Computador",
  "navegador-window": "Navegador",
  "snake-window": "Jogo Snake",
  "terminal-window": "MS-DOS Prompt"
};

// Lista de sites aleatórios para o comando 'xxx' no terminal.
// Você pode editar ou adicionar URLs aqui quando quiser.
const sitesAleatorios = [
  "https://theuselessweb.com/",
  "https://pointerpointer.com/",
  "https://zoomquilt.org/",
  "https://neave.tv/",
  "https://endless.horse/",
  "https://pornhub.com/",
  "https://pornhub.com/",
  "https://pornhub.com/"
];

function tocarSom(arquivo) {
  const audio = new Audio(`assets/sounds/${arquivo}`);
  audio.play().catch(() => {});
}

function focarJanela(janela) {
  zIndexCounter += 1;
  janela.style.zIndex = zIndexCounter;
}

function atualizarTaskbar() {
  const container = document.getElementById("taskbar-icons");
  container.innerHTML = "";

  Object.entries(janelasInfo).forEach(([id, titulo]) => {
    const el = document.getElementById(id);
    if (el && el.style.display === "block") {
      const btn = document.createElement("button");
      btn.className = "taskbar-item";
      btn.textContent = titulo;
      btn.onclick = () => focarJanela(el);
      container.appendChild(btn);
    }
  });
}

function abrirJanela(idBase) {
  tocarSom("click.wav");
  const janela = document.getElementById(`${idBase}-window`);
  if (!janela) return;
  janela.style.display = "block";
  focarJanela(janela);
  atualizarTaskbar();
}

function fecharJanela(idJanela) {
  tocarSom("click.wav");
  const janela = document.getElementById(idJanela);
  if (!janela) return;
  janela.style.display = "none";

  if (idJanela === "snake-window") {
    clearInterval(game);
  }

  atualizarTaskbar();
}

function acionarLixeira() {
  tocarSom("error.wav");
  alert("A Lixeira está vazia.");
}

function abrirNavegador(urlOpcional) {
  tocarSom("click.wav");
  const janela = document.getElementById("navegador-window");
  const status = document.getElementById("browser-status");
  const iframe = document.getElementById("browser-iframe");

  janela.style.display = "block";
  focarJanela(janela);
  atualizarTaskbar();

  if (urlOpcional) {
    status.textContent = `Carregando ${urlOpcional}...`;
    iframe.src = urlOpcional;
    return;
  }

  status.textContent = "Carregando...";
  if (!iframe.getAttribute("src")) {
    status.textContent = "Carregando... (nenhuma URL configurada no iframe)";
  }
}

function abrirJogoSnake() {
  tocarSom("click.wav");
  const janela = document.getElementById("snake-window");
  janela.style.display = "block";
  focarJanela(janela);
  atualizarTaskbar();
  iniciarJogoSnake();
}

function abrirTerminal() {
  tocarSom("click.wav");
  const janela = document.getElementById("terminal-window");
  janela.style.display = "block";
  focarJanela(janela);
  atualizarTaskbar();
  setTimeout(() => {
    document.getElementById("terminal-input").focus();
  }, 50);
}

function escreverNoTerminal(texto) {
  const output = document.getElementById("terminal-output");
  const linha = document.createElement("div");
  linha.textContent = texto;
  output.appendChild(linha);
  output.scrollTop = output.scrollHeight;
}

function executarComandoTerminal(rawCmd) {
  const cmd = rawCmd.trim();
  if (!cmd) return;

  escreverNoTerminal(`C:\>${cmd}`);
  const lower = cmd.toLowerCase();

  if (lower === "help") {
    escreverNoTerminal("Comandos disponíveis: help, cls, snake, browser");
  } else if (lower === "cls") {
    document.getElementById("terminal-output").innerHTML = "";
  } else if (lower === "snake") {
    escreverNoTerminal("Abrindo Jogo Snake...");
    abrirJogoSnake();
  } else if (lower === "browser") {
    escreverNoTerminal("Abrindo Navegador...");
    abrirNavegador();
  } else if (lower === "xxx") {
    const escolhido = sitesAleatorios[Math.floor(Math.random() * sitesAleatorios.length)];
    escreverNoTerminal(`Destino aleatório selecionado: ${escolhido}`);
    abrirNavegador(escolhido);
    window.open(escolhido, "_blank", "noopener,noreferrer");
  } else {
    tocarSom("error.wav");
    escreverNoTerminal(`Comando ou nome de arquivo inválido: "${cmd}"`);
  }
}

document.getElementById("terminal-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const input = event.target;
    executarComandoTerminal(input.value);
    input.value = "";
  }
});

function alternarMenuIniciar() {
  tocarSom("click.wav");
  const menu = document.getElementById("menu-iniciar");
  menu.classList.toggle("open");
}

function fecharMenuAoClicarFora(event) {
  const menu = document.getElementById("menu-iniciar");
  const startBtn = document.getElementById("start-btn");
  if (!menu.contains(event.target) && event.target !== startBtn) {
    menu.classList.remove("open");
  }
}

function desligarSistema() {
  tocarSom("click.wav");
  document.body.innerHTML = `
    <div style="height:100vh;display:flex;align-items:center;justify-content:center;background:#000000;color:#f0e6d2;font-family:'Courier New',monospace;text-align:center;padding:20px;">
      <div>
        <p><strong>Sistema desligado.</strong></p>
        <p>Atualize a página (F5) para iniciar novamente.</p>
      </div>
    </div>
  `;
}

function reiniciarSistema() {
  tocarSom("click.wav");
  location.reload();
}

function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");
  const segundos = String(agora.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Animação de inicialização
window.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("boot-screen");
  const bootBar = document.getElementById("boot-bar-fill");

  requestAnimationFrame(() => {
    bootBar.style.width = "100%";
  });

  setTimeout(() => {
    bootScreen.classList.add("hidden");
  }, 1250);
});

// Mini-jogo Snake
const canvas = document.getElementById("snake-canvas");
const ctx = canvas.getContext("2d");
const box = 20;
const cols = canvas.width / box;
const rows = canvas.height / box;

let snake = [];
let food = { x: 0, y: 0 };
let direction = null;
let score = 0;
let game = null;

function gerarComida() {
  let foodX, foodY;
  let comidaValida = false;

  // Tenta até encontrar uma posição válida
  while (!comidaValida) {
    foodX = Math.floor(Math.random() * cols) * box;
    foodY = Math.floor(Math.random() * rows) * box;

    // Verifica se a comida não está nas bordas
    const margem = box; // Margem de 1 "box" nas bordas
    if (
      foodX < margem ||
      foodY < margem ||
      foodX >= canvas.width - margem ||
      foodY >= canvas.height - margem
    ) {
      continue; // Tenta novamente se estiver nas bordas
    }

    // Verifica se a comida não está em cima da cobra
    comidaValida = !snake.some(segmento => segmento.x === foodX && segmento.y === foodY);
  }

  return { x: foodX, y: foodY };
}


function iniciarJogoSnake() {
  direction = null;
  score = 0;
  snake = [{ x: 9 * box, y: 10 * box }];
  food = gerarComida();
  document.getElementById("score").textContent = score;
  clearInterval(game);
  game = setInterval(desenharJogo, 110);
  desenharJogo();
}

let mostrarMensagem = false; // Variável para controlar a exibição da mensagem

function desenharJogo() {
  ctx.fillStyle = "#f0e6d2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Comida
  ctx.fillStyle = "#000000";
  ctx.fillRect(food.x, food.y, box, box);
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(food.x + 2, food.y + 2, box - 4, box - 4);

  // Cobra
  snake.forEach((segmento, index) => {
    ctx.fillStyle = index === 0 ? "#000080" : "#000000";
    ctx.fillRect(segmento.x, segmento.y, box, box);
    ctx.strokeStyle = "#c0c0c0";
    ctx.strokeRect(segmento.x, segmento.y, box, box);
  });

  if (!direction) return;

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;

  // Verifica colisão com as bordas
  const bateuParede =
    snakeX < 0 || snakeY < 0 ||
    snakeX + box > canvas.width ||
    snakeY + box > canvas.height;

  const bateuCorpo = snake.some((seg) => seg.x === snakeX && seg.y === snakeY);

  if (bateuParede || bateuCorpo) {
    clearInterval(game);
    tocarSom("error.wav");
    alert(`Game Over! Pontuação: ${score}`);
    return;
  }

  if (snakeX === food.x && snakeY === food.y) {
    score += 1;
    document.getElementById("score").textContent = score;

    if (score === 10) {
      mostrarMensagem = true; // Ativa a exibição da mensagem
      clearInterval(game); // Para o jogo
    }

    food = gerarComida();
  } else {
    snake.pop();
  }

  snake.unshift({ x: snakeX, y: snakeY });

  // Desenha a mensagem se necessário
  if (mostrarMensagem) {
    ctx.fillStyle = "#000000";
    ctx.font = "20px Courier New";
    ctx.textAlign = "center";
    ctx.fillText("Digite xxx no terminal", canvas.width / 2, canvas.height / 2);
  }
}




document.addEventListener("keydown", (event) => {
  const snakeWindow = document.getElementById("snake-window");
  if (snakeWindow.style.display !== "block") return;

  if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
  }

  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});
