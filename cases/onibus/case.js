// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["onibus"] = `
## O que é

Um app de celular pra uma pergunta só: a que horas sai o próximo ônibus do meu trajeto. Ida e volta entre casa e trabalho, com a baldeação no terminal, o aviso de que dá pra ir com uma passagem só e o mapa das linhas que entram no caminho. Além do trajeto, a busca em todas as 309 linhas da cidade, por número ou nome.

É um projeto próprio, em andamento, na versão 0.9. Nasceu de uma irritação de todo dia: o app oficial responde a tudo, menos à pergunta de quem já sabe o caminho e só quer o horário. [Está no ar](https://mmbrosium.github.io/onibus-curitiba/), em uso, e o [código é público](https://github.com/mmbrosium/onibus-curitiba).

![O mapa do trajeto, com o troncal em vermelho e as alimentadoras em laranja. O trecho que você usa é linha cheia; o resto do percurso, pontilhado](01-mapa.png)

## Resultado

- Horários reais da cidade num app que abre em dois segundos no celular, sem instalar nada.
- O feed oficial tem 78 MB. O que o app carrega são três JSONs que somam 55 KB.
- Ida e Volta calculadas a partir da hora que você sai: estimativa de chegada no tubo, no terminal e em casa.
- Nove versões em quatro dias, cada uma registrada no changelog do repositório, do protótipo com horário fixo no código até o mapa com os traçados reais das ruas.

## Como funciona

O dado é o GTFS da URBS, mantido pela comunidade a partir dos dados abertos do C3SL/UFPR. Pesado demais pra um celular ler. Então o trabalho se divide em dois lados:

- **No computador**, três extratores em Python leem o GTFS e produzem os arquivos pequenos: a lista das 309 linhas, os horários do trajeto e o traçado das rotas no mapa.
- **No celular**, o app só lê esses arquivos. Nenhum horário está escrito no código: atualizou o feed, rodam os extratores de novo, e o app passa a mostrar o horário novo.

Essa separação foi a "virada da fiação" da versão 0.4, e é o mesmo princípio dos outros cases: entrada, cálculo e visualização em lugares diferentes. Mudou a regra, muda num lugar só.

![A Volta: sai do trabalho às 00:20, a pé até o tubo, troncal até o terminal, baldeia com uma passagem, alimentadora pra casa](02-volta.png)

![A Ida, com as três alimentadoras que servem e a troncal sentido centro](03-ida.png)

## O mapa

Leaflet embutido no repositório, sem depender de CDN, sobre o OpenStreetMap. Cada linha é desenhada em duas partes: o trecho que você usa em linha cheia e o resto do percurso em pontilhado. Os traçados vêm dos shapes do GTFS, casados a cada linha por proximidade, então a linha segue a rua em vez de cortar quarteirão. Contorno branco em cada traçado, técnica de mapa de metrô, pra separar uma linha da outra. Tocar na linha abre uma gaveta com número, nome, tipo e sentido.

![Todas as linhas, 309, em ordem alfabética](04-linhas.png)

![Busca por número: 203, Santa Cândida / Capão Raso](05-busca.png)

## O que faltou

- **Roteador.** Hoje casa e trabalho só marcam o pino no mapa; o trajeto ainda é o fixo. O próximo passo é calcular a rota a partir dos dois endereços.
- **Consolidado**: ida e volta numa tela só.
- **Tempo real**, com o GPS dos ônibus, e as linhas metropolitanas. Dependem de dado que ainda não existe aberto.

## Como foi feito

HTML, CSS e JavaScript sem framework, separados em arquivos. Python pros extratores. Serve pelo GitHub Pages porque o navegador bloqueia a leitura dos JSONs quando o arquivo é aberto solto. Localização do usuário pelo GPS do navegador, com permissão. Endereços de casa e trabalho ficam só no navegador de quem usa.
`;

window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["onibus"] = `
## What it is

A phone app for a single question: what time is the next bus on my route. Outbound and return between home and work, with the transfer at the terminal, the notice that a single fare covers it, and a map of the lines on the way. Beyond the route, a search across all 309 lines in the city, by number or name.

It is an own project, in progress, at version 0.9. It came from a daily annoyance: the official app answers everything except the question of someone who already knows the way and only wants the time. It is [live](https://mmbrosium.github.io/onibus-curitiba/), in use, and the [code is public](https://github.com/mmbrosium/onibus-curitiba).

![The route map, trunk line in red and feeders in orange. The stretch you use is solid; the rest of the route, dotted](01-mapa.png)

## Result

- The city's real timetables in an app that opens in two seconds on a phone, nothing to install.
- The official feed is 78 MB. What the app loads is three JSONs adding up to 55 KB.
- Outbound and return computed from the time you leave: estimated arrival at the tube stop, the terminal and home.
- Nine versions in four days, each one recorded in the repository changelog, from the prototype with timetables hardcoded to the map with the real street shapes.

## How it works

The data is URBS's GTFS, maintained by the community from C3SL/UFPR open data. Too heavy for a phone to read. So the work splits in two:

- **On the computer**, three Python extractors read the GTFS and produce the small files: the list of 309 lines, the route timetables and the shapes for the map.
- **On the phone**, the app only reads those files. No timetable is written in the code: when the feed updates, the extractors run again and the app shows the new times.

That split was the "rewiring" of version 0.4, and it is the same principle as the other cases: input, calculation and display in different places. When the rule changes, it changes in one place.

![Return: leaving work at 00:20, walk to the tube stop, trunk line to the terminal, single-fare transfer, feeder home](02-volta.png)

![Outbound, with the three feeders that serve and the trunk line towards downtown](03-ida.png)

## The map

Leaflet bundled in the repository, no CDN, over OpenStreetMap. Each line is drawn in two parts: the stretch you use solid and the rest of the route dotted. Shapes come from the GTFS, matched to each line by proximity, so the line follows the street instead of cutting through blocks. A white outline on each line, the subway-map technique, keeps one line apart from the next. Tapping a line opens a drawer with number, name, type and direction.

![All 309 lines, alphabetical](04-linhas.png)

![Search by number: 203, Santa Cândida / Capão Raso](05-busca.png)

## What was left

- **Router.** Today home and work only place a pin on the map; the route is still the fixed one. The next step is computing the route from the two addresses.
- **Consolidated view**: outbound and return on one screen.
- **Real time**, with the buses' GPS, and metropolitan lines. Both depend on data that is not open yet.

## How it was built

HTML, CSS and JavaScript without a framework, in separate files. Python for the extractors. Served by GitHub Pages because the browser blocks reading the JSONs when the file is opened directly. User location through the browser's GPS, with permission. Home and work addresses stay only in the user's browser.
`;
