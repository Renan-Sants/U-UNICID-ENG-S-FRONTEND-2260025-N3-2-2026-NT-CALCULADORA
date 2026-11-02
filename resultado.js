const area=document.getElementById('resultado');
try {
    const d=JSON.parse(localStorage.getItem('calculadora-agua-dados'));
    if(!d||!Number.isInteger(d.banho)||d.banho<0||d.banho>240||!Number.isInteger(d.roupa)||d.roupa<0||d.roupa>50||!['sim','nao'].includes(d.escovar)||!['sim','nao'].includes(d.louca))throw Error('sem dados');
    const banho=d.banho*9;
    const dentes=(d.escovar==='sim'?12:1)*3;
    const louca=d.louca==='sim'?100:20;
    const roupa=d.roupa*135/7;
    const diario=banho+dentes+louca+roupa;
    const formatar=n=>n.toLocaleString('pt-BR', {
        maximumFractionDigits:1
    }
    );
    area.innerHTML=`<h2>Seu consumo estimado</h2><p class="numero">${formatar(diario)} litros/dia</p><p>${formatar(diario*7)} litros/semana · ${formatar(diario*30)} litros/30 dias</p><h3>Composição da média diária</h3><ul><li>Banho: ${formatar(banho)} L</li><li>Escovação: ${formatar(dentes)} L</li><li>Louça: ${formatar(louca)} L</li><li>Lavadora (média): ${formatar(roupa)} L</li></ul><p class="aviso">Estimativa educativa baseada nos parâmetros aproximados das regras do projeto; não corresponde à medição da residência.</p>`;
}
catch(e) {
    area.innerHTML='<h2>Não encontramos um cálculo válido</h2><p>Preencha a calculadora para visualizar o resultado.</p>';
}
