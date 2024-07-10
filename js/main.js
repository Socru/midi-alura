function playSound(idElementAudio){

    document.querySelector(idElementAudio).play();
}

const listateclas = document.querySelectorAll('.tecla');

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

