document.getElementById('form-calculadora').addEventListener('submit',event=> {
    event.preventDefault();
    const form=event.currentTarget;
    const dados= {
        banho:Number(form.banho.value),escovar:form.escovar.value,louca:form.louca.value,roupa:Number(form.roupa.value)
    };
    const valido=Number.isInteger(dados.banho)&&dados.banho>=0&&dados.banho<=240&&Number.isInteger(dados.roupa)&&dados.roupa>=0&&dados.roupa<=50&&['sim','nao'].includes(dados.escovar)&&['sim','nao'].includes(dados.louca);
    if(!valido) {
        document.getElementById('erro-form').textContent='Confira os valores e selecione todas as opções.';
        return;
    }
    try {
        localStorage.setItem('calculadora-agua-dados',JSON.stringify(dados));
        location.href='resultado.html';
    }
    catch(e) {
        document.getElementById('erro-form').textContent='Não foi possível salvar os dados neste navegador. Verifique as permissões de armazenamento.';
    }
});
