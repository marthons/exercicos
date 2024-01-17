alert('Olá! eu sou o Marthons');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('escolha um numero entre 1 e 10');
    if (chute == numeroSecreto) {
        console.log(`acertou o nuero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}