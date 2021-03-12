// Criando uma div e adicionando em grid
for(let i = 0; i <= 99; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn = document.querySelector('.btn');
const corAleatoria = document.querySelectorAll('.box');



// cores hexadecimal aleatorias
function corHex() {
    var caracter = "0123456789abcdef";
    var corLength = 6;
    var cor = "";

    for(var i= 0; i < corLength; i++){
        var aleatorioCor = Math.floor(Math.random() * caracter.length);
        cor += caracter.substring(aleatorioCor, aleatorioCor + 1);
    }

    return "#" + cor;
}

// adicionando novas cores
function addCor() {
    corAleatoria.forEach(eee => {
        var novaCor = corHex();
        eee.style.backgroundColor = novaCor;
        eee.innerHTML = novaCor;
    })
}