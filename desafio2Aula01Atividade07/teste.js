let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClick(){
    console.log('Botão foi clicado');
}

function alerta(){
    alert('Eu amo JS');
}

function perguntaCidade(){
    let cidade = prompt('Escreva o nome de uma cidade Brasileira.');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let valor1 = prompt('digite um numero');
    valor1 = parseFloat(valor1);
    let valor2 = prompt('digite outro numero');
    valor2 = parseFloat(valor2);
    let resultado = valor1 + valor2;
    alert(resultado)
}
