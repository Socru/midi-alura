function playSound(idElementAudio){

    document.querySelector(idElementAudio).play();
}

const listateclas = document.querySelectorAll('.tecla');
/*
let x = 0
while (x < 9) {
    const teclas = listateclas[x]
    const instumento = teclas.classList[1];

    const idAudio=`#sonido_${instumento}`;

    teclas.onclick = function () {
        playSound(idAudio);
     };
    x++;
}
*/
for (let i = 0; i < 9; i++){
    const teclas = listateclas[i]
    const instumento = teclas.classList[1];

    const idAudio=`#sonido_${instumento}`;

    teclas.onclick = function () {
        playSound(idAudio);
    };
    
    teclas.onkeydown = function (evento) {
        if(evento.code === 'Space'|| evento.code === 'Enter'){
        teclas.classList.add('activa');
        }
        
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('activa');
}
}