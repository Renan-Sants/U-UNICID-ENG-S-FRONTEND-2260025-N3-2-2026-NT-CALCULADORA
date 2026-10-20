# 06 — Entrega

Critérios para considerar o trabalho pronto.

## Site publicado

O site precisa estar **funcional** e **publicado** no endereço informado no README da raiz:

https://u-unicid-eng-s-frontend-2260025-n3-2-2026-nt-cal-production.up.railway.app/index.html

Se o link mudar, atualize o README **na mesma entrega**.

## Completude

- As **10 telas** listadas em [04-arquivos.md](04-arquivos.md) devem existir e **funcionar**.
- Nenhuma página vazia. Exemplo: `sobre.html` precisa existir, com conteúdo aprovado (equipe, funções, links).
- Nenhum **link quebrado** (menu, botões internos, LinkedIn/GitHub, fontes externas).
- Calculadora: formulário em `agua.html` grava no `localStorage` e `resultado.html` exibe a estimativa.
- Quiz jogável em `quiz.html`.
- Menu igual em todas as páginas de navegação, com `ativo` na página certa.

## README da raiz

O README principal deve estar **atualizado** pela equipe (descrição, páginas, tecnologias — incluindo JavaScript, se for o caso — e o link publicado).

A pasta `rule/` **não substitui** esse README; só aponta as regras internas.

**Sugestão de trecho** para colar no README da raiz (quem for atualizar o README aplica; este guia não altera esse arquivo automaticamente):

```markdown
## Regras do projeto

As regras de conteúdo, código, layout, arquivos, colaboração e entrega estão na pasta [`rule/`](rule/README.md). Todos os integrantes devem seguir esse guia antes de alterar o site.
```

## Checklist rápido antes de enviar

- [ ] `lang="pt-BR"` e `<title>` descritivo em todas as páginas
- [ ] `<footer>` dentro do `<body>`
- [ ] Menu interno sem `target="_blank"`; links externos com `noopener noreferrer`
- [ ] Sem CSS inline
- [ ] Imagens com `alt`
- [ ] `style.css` + CSS da página
- [ ] `agua.js`, `resultado.js` e `quiz.js` presentes e ligados
- [ ] Sobre com um cartão por integrante
- [ ] Site abre no link do README
- [ ] Ortografia e acentos revisados
