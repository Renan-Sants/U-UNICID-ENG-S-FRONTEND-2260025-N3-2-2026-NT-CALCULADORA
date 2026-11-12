const form=document.getElementById('form-quiz');
const feedback=document.getElementById('feedback');
form.addEventListener('submit',e=> {
    e.preventDefault();
    const respostas= {
        q1:'b',q2:'a',q3:'b',q4:'a'
    };
    let pontos=0;
    for(const [chave,certa] of Object.entries(respostas)) {
        if(new FormData(form).get(chave)===certa)pontos++;
    }
    feedback.textContent=`Você acertou ${pontos} de 4 perguntas. ${pontos===4?'Parabéns! Você conhece boas práticas de economia.':'Revise as dicas e tente novamente!'}`;
    feedback.focus();
});
form.addEventListener('reset',()=> {
    feedback.textContent='Responda às quatro perguntas para ver sua pontuação.';
});
feedback.tabIndex=-1;
