document.getElementById('form-contato').addEventListener('submit',e=> {
    e.preventDefault();
    document.getElementById('retorno-contato').textContent='Mensagem validada! Este formulário é demonstrativo e não envia os dados. Para receber mensagens de verdade, a equipe precisará configurar um serviço de contato.';
});
