# Gesso JW — Site

Iniciado em: 2026-08-04
Drive de origem: https://drive.google.com/drive/folders/1W06w6OccDfFJxchs09Xk-9lNofhVbvG9

## Inventário do material
- Marca/: 4 arquivos — **ATENÇÃO: todos são da marca "Wölfmann Construtora" (parceira), NÃO há logo Gesso JW no Drive**
- Copys/: 5 arquivos (briefing.md, depoimentos.md, portfolio-obras.md convertidos; originais .pdf/.docx preservados)
- imagens/: 92 arquivos — favoritas/ (37, curadas pelo cliente) + obras/ (portfólio por obra com créditos)
- Pendente em _raw/: PORT.zip (arquivo-fonte do portfólio), manifest.tsv; vídeos do Drive não baixados (não usados no site)

## Resumo do briefing
Gesso e drywall: arte em gesso personalizada, forros, divisórias, molduras gesso/EPS, acústica; Steel Frame só menção.
Público: arquitetos, construtoras, incorporadoras e cliente final. Região: SP zona sul/oeste, Santo André, São Caetano.
Diferenciais: atendimento, qualidade, orçamento em 2 dias úteis. Ticket mínimo 30–40 m².

## Checklist do pipeline
- [x] 1. Material extraído do Drive
- [x] 2. Pastas organizadas (scaffold-projeto)
- [x] 2b. Repo GitHub criado — https://github.com/dev-buildv/gesso-jw-site
- [x] 3. Design system (design-system/index.html + direcao-estilo.md)
- [x] 3b. Logo oficial + paleta real (2026-08-10): pentágono dourado `#D6A626` + wordmark/JW grafite `#25241E`, extraído do site antigo do cliente (www.gessojw.com.br). Paleta azul/vermelho genérica substituída em todo o CSS (Site + Site-B + páginas standalone). Ícone "+" do FAQ ajustado para grafite (dourado puro falha contraste AA como texto em fundo claro — ver design-system/direcao-estilo.md).
- [x] 3c. Arquivo oficial do logo (2026-08-10): cliente enviou o PNG real do site antigo (`Marca/logo-gesso-jw.png` fundo claro, `Marca/logo-gesso-jw-branco.png` fundo escuro, 300×106) — substitui a recriação vetorial em Site/, Site-B/ e design-system/assets/. Favicon continua vetorial (glyph simplificado, funciona bem em tamanho pequeno).
- [x] 4. Copy estruturada (Copys/copy-site.txt, 10 seções — sem wireframes no Drive)
- [x] 5. Front-end criado (Site/index.html + css + js; auditoria revisar-frontend: 0 bloqueantes após correções)
- [x] 6. Ajustes finais (webp 80MB→5,8MB; overflow 0 em 320/360/375/768/1265; menu, lightbox e reveals testados por medição)
- [x] 7. Módulos LGPD (cookie banner c/ dataLayer, política modal, /fornecedores/, /trabalhe-conosco/, form-handler.php, admin.php, db-config.example.php) — tags GTM/Merlin PULADAS (sem IDs)
- [x] 7b. Tags instaladas: GTM (GTM-NW2XFFGG) + popup Merlin, mesmas em ambas as LPs
- [x] 7c. Teste A/B das 2 LPs do briefing: `Site/` = LP A (ângulo agilidade/prazo, root/principal) e `Site-B/` = LP B (ângulo alto padrão/criatividade, slug secundário, sem link no menu da principal). Copy-fonte em `Copys/lp-a-agilidade.md` e `Copys/lp-b-alto-padrao.md`. Mesmo design system, assets e módulo LGPD (cookie banner + política); `Site-B/` não tem páginas Fornecedores/Trabalhe Conosco nem backend PHP (fora de escopo de uma LP de anúncio).
- [ ] 8. 🛑 Revisão humana + deploy (aguardando aprovação e credenciais)

## Pendências (dependem do usuário — ver state.json.pendencias, 1:1 com o report)
1. WhatsApp comercial real (placeholder em `Site/js/app.js` e `Site-B/js/app.js` → `WA_NUMBER`; candidato do uniforme: 11 98085-8686)
2. Confirmar e-mail contato@gessojw.com.br
3. Hospedagem/domínio: definir Vercel ou Hostinger — e como a LP B será publicada (2º projeto Vercel com Root Directory=Site-B, ou subpath/subdomínio na mesma hospedagem)
4. Banco MySQL + `db-config.php` + senha do admin (antes do deploy da LP A — só ela tem formulários/backend)
5. Vídeos das obras não usados (disponíveis no Drive)
