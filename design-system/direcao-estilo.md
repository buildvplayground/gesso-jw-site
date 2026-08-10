# Direção de estilo — Gesso JW (consulta ui-ux-pro-max v2.11 + marca real)

## Fonte da marca
Não há arquivos de logo Gesso JW no Drive (a pasta "Logotipo e Manual de Marca" é da
**Wölfmann Construtora**, parceira — NÃO usar). A identidade real foi confirmada direto no
site antigo do cliente, **www.gessojw.com.br** (2026-08-10): wordmark **"Gesso" em grafite
bold + "JW" em grafite dentro de um pentágono/casa dourado**. Logos SVG em `Marca/`
recriados em vetor a partir dos arquivos oficiais extraídos do site — cores e formato
conferidos por amostragem de pixel (`#25241E` grafite, `#D6A626` dourado). Não é mais
recriação às cegas — é a marca real.

## Estilo recomendado (banco ui-ux-pro-max: Construction/Architecture)
- **Primário:** Minimalismo + fotos reais das obras (hiper-realismo — nada de stock/IA)
- **Secundário:** Swiss Modernism 2.0 (grid rígido, tipografia forte, muito branco — combina com gesso)
- **Landing pattern:** Hero-Centric + Feature-Rich + Social Proof (depoimentos reais de 7 clientes/parceiros)
- **Palavras-chave:** limpo, técnico, confiável, precisão, acabamento

## Paleta (extraída do site oficial do cliente — www.gessojw.com.br)
- Grafite `#25241E` (pentágono/casa + wordmark "Gesso"/"JW") — primária, headers, footer, CTAs
- Dourado `#D6A626` ("JW" dentro da casa) — acento, ícones, checkmarks, hover em fundo claro
- Dourado escurecido `#b1943b` — mesmo acento em fundo escuro (o site do cliente usa esse tom
  mais opaco sobre preto; o dourado puro `#D6A626` tem contraste baixo como texto em fundo claro
  — ver nota de acessibilidade abaixo)
- Branco gesso `#F7F5F2` / cinza claro `#EDEAE4` — fundos (eco do produto: gesso é branco)
- Grafite texto `#1d2127` — corpo de texto (tom levemente mais neutro que o grafite da marca)
- Verde WhatsApp `#25D366` — apenas no ícone/CTA de WhatsApp

**Nota de acessibilidade:** `#D6A626` sobre branco tem contraste ~2.25:1 (abaixo do mínimo
WCAG AA de 4.5:1 para texto). Usar dourado puro só em elementos decorativos (bordas, ícones
acompanhados de texto, marcas d'água) — nunca como cor de texto real ou único indicador de
estado interativo (ex.: o "+" de expandir do FAQ usa grafite, não dourado, por esse motivo).

## Tipografia
- Display: **Archivo** (500/600, upright — o wordmark real não é itálico)
- Corpo: **Inter** (300/400/500/600)
- Sem serifada (anti-default BuildV); o dourado aqui é a cor real da marca, não decisão
  estética genérica — ver nota no item 6 dos anti-padrões.

## Efeitos e animações
- Hover de cards: lift `translateY(-4px)` + sombra tintada de grafite
- Contadores animados nos números de autoridade; fade-in on-scroll sutil (≤400ms)
- Smooth scroll; micro-interações discretas. Respeitar `prefers-reduced-motion`.

## Anti-padrões do setor (não fazer)
1. **Overflow horizontal** em qualquer viewport (aceite: zero de 320px+) — severidade alta no banco UX
2. Foto de stock genérica de capacete/aperto de mãos — usar SÓ fotos reais das obras
3. Visual "template de IA": gradientes roxo/índigo, glassmorphism gratuito, emojis como ícones
4. Hero em carrossel/slider automático
5. Formulário longo como CTA principal — CTA BuildV é **botão WhatsApp**
6. Dourado + serifada "luxo imobiliário" clichê genérico — **não se aplica aqui**: o
   dourado `#D6A626` é a cor real e literal da marca Gesso JW (o pentágono do logo), usado
   com tipografia sans-serif reta, não como enfeite de luxo importado de outro nicho
7. Scroll-cue ("role para baixo") e botão back-to-top — proibidos no padrão BuildV
8. Texto sobre foto sem overlay de contraste (WCAG AA mínimo)
9. Ícones inconsistentes (mistura de estilos) — usar um set único stroke 2px
10. Prometer o que o briefing não confirma (números de autoridade inventados)
