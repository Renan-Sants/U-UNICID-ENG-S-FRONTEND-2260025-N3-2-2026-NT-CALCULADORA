# 04 — Arquivos

Onde cada arquivo mora, quais telas existem e como o menu se organiza.

## Localização

Todos os arquivos do site (HTML, CSS e JS) ficam na **raiz do projeto**. Não criar pastas `css/` nem `js/`.

A pasta `rule/` é só documentação das regras; não faz parte das páginas publicadas.

## As 10 telas

| Arquivo | Função | No menu? |
|---|---|---|
| `index.html` | Início — apresentação e acesso rápido | Sim (Início) |
| `agua.html` | Calculadora — formulário de hábitos | Sim (Calculadora) |
| `resultado.html` | Resultado da estimativa | Não |
| `dicas.html` | Dicas de economia | Sim (Dicas) |
| `sobre.html` | Site e equipe | Sim (Sobre) |
| `curiosidades.html` | Curiosidades sobre água | Sim (Curiosidades) |
| `consumo.html` | Consumo e contexto hídrico | Sim (Consumo) |
| `quiz.html` | Quiz educativo | Sim (Quiz) |
| `contato.html` | Contato | Sim (Contato) |
| `404.html` | Página de não encontrado | Não |

## Arquivos de apoio

- `style.css` — estilos globais (menu, rodapé, botões, variáveis).
- Um CSS por página: `index.css`, `agua.css`, `resultado.css`, `dicas.css`, `sobre.css`, `curiosidades.css`, `consumo.css`, `quiz.css`, `contato.css`, `404.css`.
- JavaScript: `agua.js`, `resultado.js`, `quiz.js`.

Páginas só com conteúdo estático não precisam de `.js`.

## Menu (ordem)

Início · Calculadora · Dicas · Curiosidades · Consumo · Quiz · Sobre · Contato

Fora do menu: `resultado.html` e `404.html`. O resultado é aberto após o cálculo; a 404 é para endereço inexistente.

## Página Sobre

Um **cartão por integrante**, com:

- foto **ou** iniciais, se ainda não houver foto;
- nome;
- função no projeto;
- botão **LinkedIn** e botão **GitHub** — **só exibir o botão cujo link existir**.

Não deixe botão apontando para `#` ou para perfil vazio.

**Sugestão:** nomes, funções e URLs dos perfis devem ser confirmados com cada integrante antes de ir para o HTML (veja [01-conteudo.md](01-conteudo.md)).

## Árvore completa (alvo)

```text
.
├── README.md
├── index.html
├── agua.html
├── resultado.html
├── dicas.html
├── sobre.html
├── curiosidades.html
├── consumo.html
├── quiz.html
├── contato.html
├── 404.html
├── style.css
├── index.css
├── agua.css
├── resultado.css
├── dicas.css
├── sobre.css
├── curiosidades.css
├── consumo.css
├── quiz.css
├── contato.css
├── 404.css
├── agua.js
├── resultado.js
├── quiz.js
└── rule/
    ├── README.md
    ├── 01-conteudo.md
    ├── 02-codigo.md
    ├── 03-layout.md
    ├── 04-arquivos.md
    ├── 05-colaboracao.md
    └── 06-entrega.md
```

Arquivos extras (fotos da equipe, por exemplo) também ficam na raiz, com nome em minúsculas, sem espaço e sem acento (`foto-ana.jpg`). Se o grupo preferir uma pasta só de imagens depois, isso precisa ser combinado — **hoje a regra é tudo na raiz**.
