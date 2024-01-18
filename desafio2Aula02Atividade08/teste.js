function olaMundo(){
    console.log('Olá Mundo!')
}
olaMundo()

function cumprimento(nome){
   console.log(`Olá ${nome}!`)
}
cumprimento('Thon')

function dobro(numero){
    let dobro = numero * 2;
    console.log(dobro);
}
dobro(9)

function media(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3;
    console.log(media);
}
media(3, 4, 8)

function maior(num1, num2){
    if (num1 > num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}
maior(1, 2)

function quadrado(num1){
    quadrado = num1 * num1
    console.log(quadrado);
}
quadrado(3)