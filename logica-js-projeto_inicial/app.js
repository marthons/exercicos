alert('Olá! eu sou o Marthons');
let numeroSecreto = parseInt(Math.random()*100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('escolha um numero entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert (`acertou o nuero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
/*
if (tentativas > 1) {
    alert(`acertou o nuero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`acertou o nuero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/
