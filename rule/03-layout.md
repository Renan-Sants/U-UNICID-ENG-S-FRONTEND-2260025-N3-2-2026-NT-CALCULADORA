# 03 — Layout

Regras visuais e de responsividade.

## Identidade

- Paleta: `azure`, `aliceblue` e `darkcyan`.
- Fonte: **Arial** (e genérica `sans-serif` como fallback).
- Cartões: bordas **arredondadas** e **sombra suave**.
- Layout com **Flexbox** (não usar tabela para montar a página).

**Sugestão:** definir as cores como variáveis no `:root` de `style.css` (`--cor-fundo`, `--cor-destaque`, etc.) para não repetir o nome da cor em dezenas de regras.

## Onde vai cada CSS

| Arquivo | Responsabilidade |
|---|---|
| `style.css` | Estilos **repetidos**: menu, rodapé, botões, variáveis de cor, cartão genérico |
| CSS da página (`index.css`, `dicas.css`, …) | Só o que for **específico** daquela tela |

Não copie o mesmo bloco de menu ou de botão em vários CSS. Se o estilo se repetir, ele pertence a `style.css`.

Cada HTML deve ligar o global e o da página, nesta ordem:

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="nome-da-pagina.css">
```

## Largura e quebra no celular

- Use `max-width` e **media queries**.
- Nunca use `width` fixo (por exemplo `width: 1200px`) que estoure a tela do celular.
- Teste em **celular, tablet e computador**.

**Sugestão de pontos de quebra (não obrigatório):** cerca de 600px (celular) e 900px (tablet). O grupo pode ajustar, desde que o menu e os cartões continuem usáveis.

## Menu

- Menu **fixo** no topo e **idêntico** em todas as páginas (mesmos itens, mesma ordem).
- Na página atual, o item correspondente usa a classe `ativo`, com estilo visível (cor, sublinhado ou fundo), definido em `style.css`.
- Itens: veja a lista em [04-arquivos.md](04-arquivos.md). `resultado` e `404` **não** entram no menu.

## Acessibilidade visual

- Contraste adequado entre texto e fundo (texto escuro sobre `azure`/`aliceblue`; texto claro sobre `darkcyan`, se o botão for assim).
- Tamanho de fonte legível; não dependa só da cor para indicar o item ativo do menu.

## O que não fazer

- CSS inline.
- Paleta fora das três cores combinadas (salvo preto/cinza para texto, se o contraste exigir).
- Menu diferente de uma página para outra.
