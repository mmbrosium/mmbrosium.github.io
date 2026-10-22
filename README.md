# Portfólio de cases

Site estático em HTML, CSS e JavaScript. Sem framework, sem build. Abre em qualquer navegador.

## Como publicar no GitHub Pages (uma vez)

1. No GitHub, crie um repositório **público** chamado exatamente `mmbrosium.github.io`.
2. Clique em **Add file → Upload files**, arraste todos os arquivos e pastas deste pacote (`index.html`, `case.html`, `style.css`, `app.js`, `cases.js`, `README.md`, pastas `assets/` e `cases/`) e clique em **Commit changes**.
3. Em **Settings → Pages**, em "Build and deployment", escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`. Salve.
4. Em um ou dois minutos o site está em `https://mmbrosium.github.io`.

Link de um case: `https://mmbrosium.github.io/case.html?c=psat`.
Link direto para uma seção: `https://mmbrosium.github.io/case.html?c=psat#dashboard`.

## Como adicionar um case (sem mexer em código)

1. Crie uma pasta em `cases/` com um nome curto, só letras minúsculas: `cases/novo-case/`.
2. Dentro dela, crie `case.js` com o texto. Copie o de outro case e troque o nome entre aspas e o texto entre as crases. Modelo:

   ```js
   window.CASE_MD = window.CASE_MD || {};
   window.CASE_MD["novo-case"] = `
   ## Problema
   Texto.

   ## Ação
   - item
   - item

   ![Legenda da imagem](tela-1.png)

   ## Resultado
   - item
   `;
   ```

   As duas primeiras linhas e a última são fixas. Entre as crases é Markdown normal. Só não use o caractere crase (`) dentro do texto.

   `##` vira título de seção. `-` vira item de lista. `**texto**` fica em negrito.
   `![Legenda](arquivo.png)` mostra a imagem que está na mesma pasta, com a legenda embaixo.

3. Suba as imagens na mesma pasta (**Add file → Upload files** dentro da pasta).
4. Abra `cases.js`, clique no lápis (editar) e acrescente um bloco dentro de `"cases": [ ... ]`:

   ```json
   {
     "id": "novo-case",
     "titulo": "Título completo do case",
     "curto": "Nome curto no card",
     "categorias": ["planilhas"],
     "empresa": "Empresa · Projeto",
     "ferramentas": "Google Sheets, ...",
     "resumo": "Uma frase sobre o problema e o resultado.",
     "destaque": "O número-chave, ex.: De 2 h para 15 min",
     "capa": "tela-1.png"
   }
   ```

   `capa` é a imagem que aparece no card da página inicial (um arquivo da pasta do case). Deixe `""` para card sem imagem. Se o case está em duas colunas e quer capas diferentes, acrescente `"capa_dashboards": "outra-tela.png"`.

   - `id` tem que ser igual ao nome da pasta.
   - `categorias` aceita mais de uma: `["planilhas", "dashboards"]`. O case aparece nas duas colunas.
   - Um case em duas categorias tem um card em cada coluna. O card da categoria secundária abre **só aquela parte**:
     - `"ancora_dashboards": "dashboard"` → abre a seção "## Dashboard" do case sozinha (`case.html?c=id&sec=dashboard`), com link pro case completo. O nome da seção vai em minúsculas, sem acento, com hífens.
     - `"link_dashboards": "dashboards/esteira.html"` → abre direto um arquivo (um dashboard vivo, por exemplo). Dashboards ficam na pasta `dashboards/`.
   - Na página do case, a barra fixa mostra só as categorias do case, mais os botões ⌂ (início) e ← (voltar aos cases).
   - Separe os blocos com vírgula. O último não leva vírgula.

5. Commit. O site atualiza sozinho em um ou dois minutos.

## Testar no computador antes de publicar

Duplo clique no `index.html`. Tudo funciona local, inclusive as páginas dos cases e as imagens. A única coisa que depende de internet é a fonte (Cinzel); sem ela o site usa a fonte do sistema.

## Som de interface

O botão ♪ na barra liga um som curto ao passar o mouse e ao clicar. Vem desligado e o navegador lembra a escolha. É gerado pelo próprio navegador (Web Audio), sem arquivo de áudio. Para remover de vez, apague o bloco "Som de interface" no `app.js` e o botão `#snd` nos dois HTML.

## Como trocar uma imagem

Suba o arquivo novo **com o mesmo nome** na mesma pasta. O GitHub substitui.

## Como mudar o texto do cabeçalho ou os links

Está tudo em `cases.js`, no bloco `"autor"`.

## Como mudar as categorias ou as cores

Categorias: bloco `"categorias"` do `cases.js`. Cores: as três variáveis `--planilhas`, `--dashboards` e `--sistemas` no topo do `style.css`. Se criar uma categoria nova, crie a variável com o mesmo nome.

## Estrutura

```
index.html      página inicial (três colunas)
case.html       página de um case (lê ?c=id)
style.css       visual
app.js          lê cases.js e os case.js de cada case e monta as páginas
cases.js      lista de cases e dados do cabeçalho
assets/         ornamentos, colchetes e a biblioteca marked (Markdown → HTML)
cases/<id>/     case.js (texto em Markdown) + imagens de cada case
dashboards/     dashboards em HTML, arquivo único cada (abrem sem internet)
```

## Links dentro do texto de um case

Imagens são relativas à pasta do case (`![legenda](tela.png)`). Links comuns são relativos à raiz do site: `[Abrir o dashboard](dashboards/esteira.html)`.
