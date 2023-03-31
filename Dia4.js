// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o 
//número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você 
//acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número 
//pré-definido.
var prompt = require('prompt-sync')();
function numeroAletarioInteiro (min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
const meuNumero = numeroAletarioInteiro();

console.log(`Olá caro participante seja bem vindo ao desafio de adivinhação!!`);
const nome = prompt(`Para iniciarmos primeiro preciso saber qual é o seu nome?
(O que foi? Quem vai tentar adivinhar qual numero estou pensando é vc eu não possuo poderes de adivinhação...)\n`);
let palpite = prompt(`Ok vamos lá ${nome} em que numero de 0 a 10 estou pensando?
A partir de agora vc tem 3 chutes...`);

for(let i=2; i>0; i--){
    if(palpite == meuNumero){
        console.log(`Uauuu! parabéns vc acertou eu estava pensando no numero: ${meuNumero}`);
        return 0;
    }else{
        console.log(`Errouu! Vamos lá vc tem mais ${i} chutes!!` );
        palpite = prompt("Qual seu proximo chute? ");
    }
    
}
console.log("Que pena suas tentativas acabaram eu estava pensando no numero "+meuNumero);
return 0;