// Preferência de tamanho de fonte persistida localmente.
let escala=1;
try {
    escala=Number(localStorage.getItem('calculadora-agua-fonte'))||1;
}
catch(e) {
}
function aplicar() {
    document.documentElement.style.fontSize=`${escala*100}%`;
}
aplicar();
for(const [id,delta] of [['fonte-mais',.1],['fonte-menos',-.1]])document.getElementById(id).addEventListener('click',()=> {
    escala=Math.max(.9,Math.min(1.5,Math.round((escala+delta)*10)/10));
    aplicar();
    try {
        localStorage.setItem('calculadora-agua-fonte',String(escala));
    }
    catch(e) {
    }
});
