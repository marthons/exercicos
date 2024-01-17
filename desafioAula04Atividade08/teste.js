console.log('Bem vindo!!');

let nome = 'Thon';
console.log(`Bem vindo ${nome}!!`);

alert(`Bem vindo ${nome}!!`);

let lingua = prompt('Qual linguagem de programação você mais gosta?')
console.log(`Parabéns a ${lingua}!! é a melhor linguagem de programação!!`);

let valor1 = 49;
let valor2 = 29;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let resultado2 = valor1 - valor2;
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado2}.`);

let idade = prompt('Insira sua idade');

if(idade > 18){
    console.log('Parabéns você é maior de idade!!!')
}else{
    console.log('Parabéns você é menor de idade!!!')
}

let numero = prompt('Digite um numero positivo ou negativo');
if(numero == 0){
    alert('É zero!')
}else if(numero > 0){
    alert('É positivo')
}else{
    alert('É negativo')
}

