SIMULADOR WINDOWS 95 COM TERMINAL (HTML/CSS/JS PURO)
====================================================

Um jogo clássico da cobrinha (Snake) integrado a um navegador fake com estilo retro (Windows 95/MS-DOS). O jogo apresenta:

Estética pixel art com cores bege, cinza e preto
Controles simples com setas do teclado
Sistema de pontuação
Colisão com paredes e com o próprio corpo
Comida que não aparece nas bordas
🎮 Como Jogar
Abrir o jogo: Execute o arquivo index.html em um navegador moderno
Controles:
Use as setas do teclado (↑, ↓, ←, →) para mover a cobra
Evite colidir com as paredes ou com o próprio corpo
Objetivo: Comer a comida vermelha (⬛) para aumentar sua pontuação
Game Over: Quando a cobra colidir com uma parede ou com ela mesma
🖥️ Tecnologias Utilizadas
HTML5: Estrutura do jogo
CSS: Estilização com tema retro
JavaScript: Lógica do jogo e interatividade
🎨 Estilo Visual
Paleta de cores: Bege (#f0e6d2), preto, cinza (#c0c0c0) e azul escuro (#000080)
Fontes: Courier New (estilo terminal retro)
Elementos visuais:
Comida: Quadrado preto com centro vermelho
Cobra: Cabeça azul escura e corpo preto
Bordas espessas pretas
📁 Estrutura do Projeto


snake-game/
├── index.html          # Arquivo principal do jogo
├── style.css           # Estilos CSS
├── script.js           # Lógica do jogo
├── assets/             # Pasta para imagens e sons
│   ├── error.wav       # Som de game over
🛠️ Personalização
Alterar configurações do jogo
No arquivo script.js, você pode modificar:

box: Tamanho de cada segmento da cobra (padrão: 20)
canvas.width/height: Tamanho da área de jogo
Cores dos elementos
Adicionar novos sons
Coloque arquivos .wav ou .mp3 na pasta assets/
Modifique a função tocarSom() no script.js para usar o novo arquivo
📊 Sistema de Pontuação
Cada comida comida aumenta a pontuação em 1
A pontuação é exibida no canto superior direito
O jogo registra a pontuação máxima localmente (no navegador)
🔧 Requisitos
Navegador moderno (Chrome, Firefox, Edge, Safari)
JavaScript habilitado
🚀 Como Executar
Baixe ou clone este repositório
Abra o arquivo index.html em seu navegador
Comece a jogar!
📝 Notas
O jogo é responsivo e se adapta ao tamanho da janela
A comida nunca aparece nas bordas do jogo
A cobra não pode atravessar paredes ou a si mesma
📄 Licença
Este projeto é de código aberto e pode ser usado livremente para fins educacionais ou recreativos.
