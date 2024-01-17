alert ('Bem vindos ao ONE-ALURA')
let nome = 'lua';
let idade = 25;
let numeroVendas = 50;
let saldoDisponvel = 1000;

alert ('Preencha todos os campos!!');

let mensagemDeErro = 'Erro!! Preencha todos os campos.';
alert (mensagemDeErro);

nome = prompt('Qual seu nome de usuário?');
idade = prompt('qual sua idade?');

if (idade >= 18){
    alert ('Pode tirar a habilitção');
}