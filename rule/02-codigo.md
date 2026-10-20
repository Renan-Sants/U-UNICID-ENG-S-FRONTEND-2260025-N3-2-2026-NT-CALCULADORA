# 02 — Código

Regras de HTML, CSS e JavaScript.

## HTML

- Todas as páginas devem ter `lang="pt-BR"` no elemento `<html>`.
- Use HTML **semântico**: `header`, `nav`, `main`, `section`, `article`, `footer`, `form`, `label`.
- O `<footer>` fica **sempre dentro** do `<body>` (nunca depois do `</body>`).
- Feche todas as tags. Não deixe `<b>` ou `<div>` abertos.
- Parágrafos vão em `<p>`. **Não** use `<h3>` (nem outro heading) para texto corrido.
- Headings (`h1`–`h6`) só para títulos, em ordem lógica. Cada página tem um `<h1>` principal.
- Cada página tem um `<title>` **descritivo** (ex.: `Calculadora de Água — Dicas`, não só `dicas`).
- Inclua `<meta charset="UTF-8">` e viewport para responsividade.

Exemplo mínimo da estrutura:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Água — Início</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <nav><!-- menu --></nav>
    <header><!-- título da página --></header>
    <main><!-- conteúdo --></main>
    <footer>
        <p>Projeto educacional sobre consumo consciente de água.</p>
    </footer>
</body>
</html>
```

## Nomenclatura

- Classes e IDs: **minúsculas com hífen** (`form-calculadora`, `card-integrante`).
- Nomes de arquivo: **minúsculas**, sem espaços e **sem acentos** (`agua.html`, não `água.html`).
- Indentação consistente (espaços, o mesmo padrão da tela). Comente trechos importantes (cálculo, `localStorage`, menu ativo).

## CSS

- **Sem CSS inline** (`style="..."` nos elementos).
- Estilos globais (menu, rodapé, botões, cores) só em `style.css`. Detalhes da tela no CSS daquela página. Veja [03-layout.md](03-layout.md).

## Imagens e links

- Toda imagem tem `alt` descritivo. Se for só decorativa, `alt=""` e o contexto já está no texto ao lado.
- Links **externos**: `target="_blank"` e `rel="noopener noreferrer"`.
- Links **internos** (menu e navegação entre páginas do site): **sem** `target="_blank"`.

## JavaScript

JavaScript é **permitido** nas telas que precisam de interatividade.

- Um arquivo `.js` por tela que precisar:
  - `agua.js` — formulário da calculadora
  - `resultado.js` — leitura e exibição do total
  - `quiz.js` — perguntas e feedback
- Os dados da calculadora vão para o resultado **via `localStorage`**.
- Não coloque lógica pesada no HTML. Não use JavaScript para o que CSS ou HTML já resolvem (ex.: esconder o menu).

**Sugestão:** se o resultado abrir sem dados no `localStorage`, mostrar uma mensagem amigável e um link para `agua.html`, em vez de números vazios ou `NaN`.
