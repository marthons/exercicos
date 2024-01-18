let titulo = document.getElementById("imc");
titulo.innerHTML = 'Indice de Massa Corporal IMC';
let titulo2 = document.getElementById("fatorial");
titulo2.innerHTML = 'Valor do Fatorial';
let titulo3 = document.getElementById("conversor");
titulo3.innerHTML = 'Conversor Dolar para Reais';
let titulo4 = document.getElementById("perimetro");
titulo4.innerHTML = 'Area e Perimetro do Quadarado';
let titulo5 = document.getElementById("area");
titulo5.innerHTML = 'Area e Perimetro do Circulo';
let titulo6 = document.getElementById("tabuada");
titulo6.innerHTML = 'Tabuada:';
let paragrafo1 = document.getElementById("indice");
let paragrafo2 = document.getElementById("resultado");
let paragrafo3 = document.getElementById("dolar");
let paragrafo4 = document.getElementById("quadrado");
let paragrafo5 = document.getElementById("circulo");
let paragrafo6 = document.getElementById("vezes");



function imc(peso, altura){
    let valorIMC = peso / (altura * altura);
    paragrafo1.innerHTML = valorIMC;
}
imc(88, 1.9)


function fatorial(num){
    if (num < 0) {
        paragrafo2.innerHTML = 'Não é possível calcular o fatorial de um número negativo.';
        return;
    }

    let valorFatorial = 1;
    
    for (let i = 1; i <= num; i++) {
        valorFatorial *= i;
    }
    
    paragrafo2.innerHTML = `O fatorial de ${num} é: ${valorFatorial}`;
}
fatorial(5);

function conversor(valor){
    let reais = valor * 4.80;
    paragrafo3.innerHTML = `O valor de ${valor} dolares fica ${reais} reais! `
}
conversor(100);

function areaPerimetroQuadrado(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura + largura) * 2;
    paragrafo4.innerHTML = `A área desse objeto é ${area} e o perimetro ficou ${perimetro}`;
}
areaPerimetroQuadrado(2, 3);

function areaPerimetroCirculo(raio) {
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;
    paragrafo5.innerHTML = `A área desse objeto é ${area} e o perimetro ficou ${perimetro}`;
}
areaPerimetroCirculo(3);

function tabuada(num){
    let i = 0;
    let resultadoTabuada = '';
    while (i <= 10) {
       let valorTabuada = num * i;
       resultadoTabuada += `${num} vezes ${i} é igual ${valorTabuada}<br>`;
       i++       
    }
    paragrafo6.innerHTML = resultadoTabuada;
}
tabuada(7);