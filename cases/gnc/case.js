// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["gnc"] = `
## O que é

Um bloco de notas num arquivo HTML, pra guardar procedimento, texto de apoio e anotação de treinamento sem depender de programa instalado. "Compartimentado" porque a ideia é separar por assunto: cada pasta é um compartimento, com subpastas e notas dentro. Pastas e notas ficam na barra da esquerda; a nota aberta ocupa a direita, com formatação e um checklist ao lado. A referência de uso foi o Obsidian: muitas notas pequenas, organizadas em árvore, com busca que entra no texto.

Nasceu antes do SisGeral, pra guardar o que hoje é o catálogo de procedimentos. Quando o SisGeral assumiu esse papel, o GNC ficou em pausa, entre a oitava e a décima versão. Está aqui como está: funciona, e tem lista do que faltou.

![A tela inicial: estrutura à esquerda, com as pastas fechadas, e nada aberto à direita](01-principal.png)

## Estrutura

Abre com as pastas fechadas. **Open** e **Close** abrem e fecham todas de uma vez; **+ 📁** e **+ 📄** criam uma pasta ou uma nota na raiz. Pra criar dentro de uma pasta, o menu **⋮** do item: subir ou descer de posição, ordenar de A a Z, nova subpasta, nova nota, renomear, excluir. A busca procura no título e dentro do texto das notas. A seta no alto recolhe a barra, e a nota passa a ocupar a tela inteira.

![O menu de três pontos de uma pasta](02-menu.png)

![A busca entra no conteúdo: "reembolso" acha a nota pelo texto, não só pelo título](06-busca.png)

## A nota

Título em cima; barra com negrito, itálico, sublinhado, cor e um seletor de símbolos (estrela, alfinete, ideia, alerta, concluído, errado, seta, marcador, nota, calendário). À direita, o **checklist**: itens que se riscam ao marcar, com um botão pra adicionar. **Check** liga e desliga esse painel. Em cima da nota: **Copiar** o texto inteiro, **Exportar** só esta nota em TXT, **Apagar texto** e **Fechar nota**, que volta à tela vazia. No rodapé, caracteres, palavras e tempo estimado de leitura.

![Uma nota aberta, com o checklist ao lado](03-nota.png)

![Com a barra recolhida, a nota ocupa a tela](04-nota-expandida.png)

![O mesmo arquivo no tema claro](05-tema-claro.png)

## Como salva

**Salvar tudo** (Ctrl+S) baixa o próprio arquivo HTML de novo, com as notas embutidas nele. Não há banco nem servidor: o arquivo é o banco. Quem quer uma cópia copia o arquivo; quem quer a versão de ontem abre o download de ontem. Por segurança, cada mudança também fica num backup automático no armazenamento local do navegador, que é de onde o arquivo lê ao abrir.

## O que faltou

- **Colar como texto puro.** Hoje, Ctrl+V de fora traz a formatação da origem. O certo é colar sempre em texto simples, e foi a única implementação que ficou pelo caminho quando o projeto parou.
- **Mais símbolos.** A lista é fixa; podia puxar o teclado de emojis do sistema.
- **Menu ⋮ também nos botões de cima**, pra não depender de abrir a pasta primeiro.
- **Changelog.** Existia e se perdeu nas versões antigas; a partir do SisGeral, o histórico de versões passou a morar dentro do sistema.

## Como foi feito

HTML, CSS e JavaScript num arquivo só, sem biblioteca. A árvore de pastas é um JSON codificado em base64 dentro de um campo oculto do próprio HTML; salvar é reescrever esse campo e baixar o documento. O editor é um bloco de texto editável do navegador, com os comandos nativos de formatação.
`;

window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["gnc"] = `
## What it is

A notepad in a single HTML file, to keep procedures, support texts and training notes without depending on installed software. "Compartmented" because the idea is to split by subject: each folder is a compartment, with subfolders and notes inside. Folders and notes sit on the left; the open note takes the right side, with formatting and a checklist beside it. The reference was Obsidian: many small notes, organized as a tree, with a search that goes into the text.

It came before SisGeral, to hold what is now the procedure catalog. When SisGeral took that role, GNC went on pause, somewhere between the eighth and tenth version. It is here as it is: it works, and it has a list of what was left.

![The home screen: structure on the left, folders closed, nothing open on the right](01-principal.png)

## Structure

It opens with the folders closed. **Open** and **Close** expand and collapse all of them at once; **+ 📁** and **+ 📄** create a folder or a note at the root. To create inside a folder, the item's **⋮** menu: move up or down, sort A to Z, new subfolder, new note, rename, delete. Search looks in titles and inside the notes' text. The arrow at the top collapses the sidebar, and the note takes the whole screen.

![A folder's three-dot menu](02-menu.png)

![Search goes into the content: "reembolso" finds the note by its text, not just its title](06-busca.png)

## The note

Title on top; a bar with bold, italic, underline, color and a symbol picker (star, pin, idea, alert, done, wrong, arrow, bullet, note, calendar). On the right, the **checklist**: items that get struck through when checked, with a button to add more. **Check** toggles that panel. Above the note: **Copy** the whole text, **Export** just this note as TXT, **Clear text** and **Close note**, which returns to the empty screen. In the footer, characters, words and estimated reading time.

![An open note, with the checklist beside it](03-nota.png)

![With the sidebar collapsed, the note takes the screen](04-nota-expandida.png)

![The same file in the light theme](05-tema-claro.png)

## How it saves

**Save all** (Ctrl+S) downloads the HTML file itself again, with the notes embedded in it. There is no database and no server: the file is the database. Whoever wants a copy copies the file; whoever wants yesterday's version opens yesterday's download. As a safety net, every change also goes to an automatic backup in the browser's local storage, which is where the file reads from when it opens.

## What was left

- **Paste as plain text.** Today, Ctrl+V from outside brings the source formatting along. The right thing is to always paste plain text, and it was the one implementation left behind when the project stopped.
- **More symbols.** The list is fixed; it could pull the system's emoji keyboard.
- **The ⋮ menu on the top buttons too**, so you don't have to open the folder first.
- **Changelog.** It existed and was lost in old versions; from SisGeral on, the version history lives inside the system.

## How it was built

HTML, CSS and JavaScript in a single file, no library. The folder tree is a base64-encoded JSON inside a hidden field of the HTML itself; saving means rewriting that field and downloading the document. The editor is a browser-native editable block, with the native formatting commands.
`;
