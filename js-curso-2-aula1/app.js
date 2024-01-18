// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do números Secretos';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do números Secretos')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100')

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto)
}

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * 100 + 1);
}