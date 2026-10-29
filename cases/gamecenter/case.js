// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["gamecenter"] = `
## O que é

Um portal com três jogos num arquivo HTML: jogo da velha, campo minado e batalha naval. Não tem utilidade de trabalho e não finge ter. Foi feito pra passar o tempo e pra exercitar o que depois virou rotina nos outros sistemas: guardar estado, desenhar grade, reagir a clique e a arrasto, e escrever um adversário que tome decisão sozinho. Cada jogo tem o seu botão de reiniciar e a seta que volta ao menu.

![Jogo da velha contra a máquina, partida vencida](01-velha.png)

## Jogo da velha

Contra um amigo no mesmo teclado ou contra a máquina, jogando de X ou de O, com placar de vitórias e empates. A máquina segue três regras, nessa ordem: se puder fechar uma linha, fecha; se você estiver a um lance de fechar, bloqueia; senão, sorteia uma casa livre. É o suficiente pra ela não perder bobamente, e insuficiente pra ser imbatível. Dá pra ganhar, e dá pra perder.

## Campo minado

Três tamanhos: 5×5 com 4 bombas, 7×7 com 9, 9×9 com 15. O primeiro clique nunca é bomba: as minas só são sorteadas depois dele, evitando a casa clicada. Os números contam as bombas vizinhas; casa sem vizinha abre em cascata. Cronômetro no canto e um placar por dificuldade, vitórias sobre partidas, que conta a partida a partir do primeiro clique, e conta como perdida se você trocar de nível ou sair no meio.

![Campo minado no fácil, antes do primeiro clique](02-minado-inicio.png)

![Partida em andamento](03-minado-jogando.png)

![Perdeu: todas as bombas aparecem](04-minado-perdeu.png)

![Venceu: todas as casas seguras abertas](07-minado-venceu.png)

![O médio, 7×7](06-minado-medio.png)

![O difícil, 9×9](05-minado-dificil.png)

## Batalha naval

Contra o computador ou contra outra pessoa no mesmo teclado, em 5×5 com 3 navios, 7×7 com 5 ou 9×9 com 7. Os navios ficam numa doca embaixo do tabuleiro: clicar gira entre horizontal e vertical, arrastar posiciona. O jogo recusa posição que não cabe ou que cruza outro navio. Quando o último navio é colocado, a frota inimiga é sorteada às escondidas e aparece o tabuleiro de ataque. Acerto marca 💥, água marca 💧, e dois contadores dizem quantas frotas restam de cada lado. A máquina atira em casas que ainda não atirou, sem perseguir o acerto anterior: uma partida pode acabar rápido pra qualquer um dos dois lados.

![A doca no 5×5: três navios de uma casa](08-naval-doca.png)

![No 7×7, cinco navios de tamanhos diferentes](09-naval-7x7.png)

![No 9×9, sete](10-naval-9x9.png)

![Frota posicionada: o tabuleiro de ataque aparece](11-naval-posicionada.png)

![No meio da partida](12-naval-jogo.png)

![Vitória](13-naval-venceu.png)

## O que faltou

- **Desfazer um navio** antes de começar, e um botão de "concluir" em vez de começar automaticamente ao colocar o último.
- **Tema escuro**, como nos outros sistemas.
- **Uma máquina que persiga o acerto** na batalha naval: hoje ela sorteia, e sorteio não é estratégia.

## Como foi feito

HTML, CSS e JavaScript num arquivo, sem biblioteca. Cada jogo guarda o próprio estado numa matriz e redesenha a grade a partir dela; o campo minado usa recursão pra abrir em cascata, e a batalha naval usa os eventos nativos de arrastar e soltar do navegador.
`;

window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["gamecenter"] = `
## What it is

A portal with three games in a single HTML file: tic-tac-toe, minesweeper and battleship. It has no work use and does not pretend to. It was made to pass the time and to practice what later became routine in the other systems: keeping state, drawing a grid, reacting to clicks and drags, and writing an opponent that decides on its own. Each game has its own restart button and the arrow back to the menu.

![Tic-tac-toe against the machine, game won](01-velha.png)

## Tic-tac-toe

Against a friend on the same keyboard or against the machine, playing X or O, with a scoreboard of wins and draws. The machine follows three rules, in this order: if it can close a line, it closes it; if you are one move from closing, it blocks; otherwise it picks a free square at random. Enough for it not to lose foolishly, not enough to be unbeatable. You can win, and you can lose.

## Minesweeper

Three sizes: 5×5 with 4 mines, 7×7 with 9, 9×9 with 15. The first click is never a mine: the mines are only drawn after it, avoiding the clicked square. Numbers count neighboring mines; a square with no neighbors opens in cascade. A timer in the corner and a per-difficulty scoreboard, wins over games, which counts a game from the first click, and counts it as lost if you switch level or leave halfway.

![Minesweeper on easy, before the first click](02-minado-inicio.png)

![A game in progress](03-minado-jogando.png)

![Lost: every mine is revealed](04-minado-perdeu.png)

![Won: every safe square open](07-minado-venceu.png)

![Medium, 7×7](06-minado-medio.png)

![Hard, 9×9](05-minado-dificil.png)

## Battleship

Against the computer or another person on the same keyboard, on 5×5 with 3 ships, 7×7 with 5 or 9×9 with 7. Ships sit in a dock below the board: clicking rotates between horizontal and vertical, dragging places. The game refuses a position that does not fit or crosses another ship. When the last ship is placed, the enemy fleet is drawn in secret and the attack board appears. A hit marks 💥, water marks 💧, and two counters say how many fleets remain on each side. The machine fires at squares it has not fired at yet, without chasing its previous hit: a game can end fast for either side.

![The dock on 5×5: three one-square ships](08-naval-doca.png)

![On 7×7, five ships of different sizes](09-naval-7x7.png)

![On 9×9, seven](10-naval-9x9.png)

![Fleet placed: the attack board appears](11-naval-posicionada.png)

![Mid-game](12-naval-jogo.png)

![Victory](13-naval-venceu.png)

## What was left

- **Undo a ship** before starting, and a "done" button instead of starting automatically when the last one is placed.
- **Dark theme**, like the other systems.
- **A machine that chases its hit** in battleship: today it draws at random, and random is not strategy.

## How it was built

HTML, CSS and JavaScript in one file, no library. Each game keeps its own state in a matrix and redraws the grid from it; minesweeper uses recursion for the cascade, and battleship uses the browser's native drag-and-drop events.
`;
