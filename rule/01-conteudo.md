# 01 — Conteúdo

Regras para textos, dados e tom do site.

## Idioma e tom

- Todo o conteúdo visível deve estar em **português do Brasil**.
- Use linguagem **clara**, acessível a quem não é da área técnica.
- O tom é **educativo** e **autoral**: explique com as próprias palavras. Não copie trechos longos de sites ou relatórios.
- Evite tom alarmista. O objetivo é conscientizar, não assustar.

## Fontes e estimativas

- Informações numéricas e afirmações sobre água devem ter **fonte confiável**, preferencialmente **Sabesp**, **ANA** ou **ONU**.
- Trate todos os valores como **estimativas**. No site, deixe isso explícito (por exemplo: “valores aproximados” ou “estimativa com base em referências da Sabesp”).
- Não invente números. Se não houver fonte, não publique o dado — pergunte ao grupo ou busque a referência antes.
- Revise **ortografia e acentos** antes de cada entrega de tela.

**Sugestão:** nas páginas com números (calculadora, resultado, consumo, dicas), incluir uma frase curta de que os litros são estimativas e podem variar conforme equipamento e região.

## Valores de referência da calculadora

Use os valores abaixo como base da estimativa (referência **Sabesp**). São **aproximados**.

| Hábito | Estimativa | Observação |
|---|---|---|
| Banho | ~9 L por minuto | Multiplicar pelos minutos informados |
| Escovar os dentes | ~12 L com a torneira aberta; ~1 L com ela fechada | Considerar **3 vezes ao dia** |
| Lavar louça | ~100 L com a torneira aberta; ~20 L com ela fechada | Por dia |
| Máquina de lavar | ~135 L por ciclo | Multiplicar pelos ciclos informados no período |

A tela da calculadora coleta os hábitos; a tela de resultado mostra o total estimado. Os dados passam de uma para a outra via `localStorage` (veja [02-codigo.md](02-codigo.md)).

## Aprovação antes de codificar

- O conteúdo **completo** de uma tela (títulos, parágrafos, rótulos de formulário, dicas, perguntas do quiz, textos dos cartões) deve ser **aprovado pelo grupo** antes de ser colocado no HTML.
- Não codifique texto provisório “para preencher depois” em página que vá para a entrega, salvo combinado explicitamente.

## O que não fazer

- Usar inglês na interface (botões, menu, títulos visíveis).
- Publicar estatística sem fonte.
- Tratar os litros da calculadora como medição exata da casa da pessoa.
