let diaSemana = prompt ('Qual dia da Semana?')

if (diaSemana == 'domingo' || diaSemana == 'sábado'){
    alert ('bom fim de semana!');
}else{
    alert ('boa semana!');
}

let numero = prompt ('digite um numero positivo ou negativo')

if (numero >= 0){
    alert ('seu numero é positivo')
}else{
    alert ('seu numero é negativo')
}

let pontuacao = prompt("Digite sua pontuação:");
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//Uma template string é uma forma de criar strings em JavaScript que permite a incorporação de expressões ou variáveis dentro da própria string. Essa funcionalidade é introduzida usando o caractere de crase (`).
let saldo = 1450;
alert(`Seu saldo atual é: R$${saldo.toFixed(2)}`);

let nome = prompt ('Qual seu nome?')
alert (`Bem vindo ${nome}!`)