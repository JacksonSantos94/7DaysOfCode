//Calculadora:

var prompt = require('prompt-sync')();
const olaUsuario = "Olá sou uma calculadora escolha uma das seguinte operações";
const operacoes = "Aperte '+' p/Soma, '-' p/Subtração, 'x' p/Multiplicação, '/' p/Divisão, 's' p/Sair:\n";
let num1;
let num2;
let operacao;
do{
    console.log(olaUsuario);
    operacao = prompt(operacoes);
    switch (operacao){
        case "+":
            soma(solicitaNumero(),solicitaNumero2());
            break;
        case "-":
            subtracao(solicitaNumero(),solicitaNumero2());
            break;
        case "x":
            multiplicacao(solicitaNumero(),solicitaNumero2());
            break;
        case "/":
            divisao(solicitaNumero(),solicitaNumero2());
            break;
    }
}while(operacao != "s");
console.log("Até a proxima.");

function solicitaNumero(){
    num1 = parseFloat(prompt("Digite o primeiro numero da operação:"));
    if(typeof(num1)=='number'){
        return num1;
    }else{
        console.log("Vc não digitou um numero");
        return 0;
    }
}
function solicitaNumero2(){
    num2 = parseFloat(prompt("Digite o segundo numero da operação:"));
    if(typeof(num2) == 'number'){
        return num2;
    }else{
        console.log("Vc não digitou um numero");
        return 0;   
    }
}
function soma(num1, num2){
    let soma = num1 + num2;
    console.log(`SOMA = ${soma}`);
}
function subtracao(num1, num2){
    let subtracao = num1 - num2;
    console.log(`SUBTRAÇÃO = ${subtracao}`);
}
function multiplicacao(num1, num2){
    let multiplicacao = num1 * num2;
    console.log(`MULTIPLICAÇÃO = ${multiplicacao}`);
}
function divisao(num1, num2){
    let divisao = num1/num2;
    console.log(`DIVISÃO = ${divisao}`);
}