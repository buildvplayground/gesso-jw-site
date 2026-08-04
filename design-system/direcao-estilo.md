# Direção de estilo — Gesso JW (consulta ui-ux-pro-max v2.11 + marca real)

## Fonte da marca
Não há arquivos de logo Gesso JW no Drive (a pasta "Logotipo e Manual de Marca" é da
**Wölfmann Construtora**, parceira — NÃO usar). A identidade real foi capturada do
**uniforme da equipe** (foto `imagens/favoritas/img-47-3.jpeg`): wordmark **"Gesso" em
vermelho itálico bold + "JW" branco dentro de pentágono azul**, site www.gessojw.com.br.
Logos SVG em `Marca/` são **recriação provisória** — substituir pelo arquivo oficial (pendência).

## Estilo recomendado (banco ui-ux-pro-max: Construction/Architecture)
- **Primário:** Minimalismo + fotos reais das obras (hiper-realismo — nada de stock/IA)
- **Secundário:** Swiss Modernism 2.0 (grid rígido, tipografia forte, muito branco — combina com gesso)
- **Landing pattern:** Hero-Centric + Feature-Rich + Social Proof (depoimentos reais de 7 clientes/parceiros)
- **Palavras-chave:** limpo, técnico, confiável, precisão, acabamento

## Paleta (derivada do uniforme/marca real — não da sugestão genérica do banco)
- Azul profundo `#1E3A7B` (pentágono JW) — primária, headers, footer
- Vermelho `#C1272D` ("Gesso") — acento/CTA
- Branco gesso `#F7F5F2` / cinza claro `#EDEAE4` — fundos (eco do produto: gesso é branco)
- Grafite `#23272E` — texto
- Verde WhatsApp `#25D366` — apenas no botão flutuante de WhatsApp

## Tipografia
- Display: **Archivo** (700/800/900, itálico nos destaques — eco do wordmark itálico)
- Corpo: **Inter** (400/500/600)
- Nunca serifada/dourado (anti-default BuildV).

## Efeitos e animações
- Hover de cards: lift `translateY(-4px)` + sombra tintada de azul
- Contadores animados nos números de autoridade; fade-in on-scroll sutil (≤400ms)
- Smooth scroll; micro-interações discretas. Respeitar `prefers-reduced-motion`.

## Anti-padrões do setor (não fazer)
1. **Overflow horizontal** em qualquer viewport (aceite: zero de 320px+) — severidade alta no banco UX
2. Foto de stock genérica de capacete/aperto de mãos — usar SÓ fotos reais das obras
3. Visual "template de IA": gradientes roxo/índigo, glassmorphism gratuito, emojis como ícones
4. Hero em carrossel/slider automático
5. Formulário longo como CTA principal — CTA BuildV é **botão WhatsApp**
6. Dourado + serifada "luxo imobiliário" clichê
7. Scroll-cue ("role para baixo") e botão back-to-top — proibidos no padrão BuildV
8. Texto sobre foto sem overlay de contraste (WCAG AA mínimo)
9. Ícones inconsistentes (mistura de estilos) — usar um set único stroke 2px
10. Prometer o que o briefing não confirma (números de autoridade inventados)
