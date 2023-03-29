//Segundo Desafio deve pedir para o usuário responder 3 perguntas:

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada 
//uma delas.

// No final, o sistema vai exibir a mensagem:

// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
var prompt = require('prompt-sync')();
const nome = prompt("Ola seja bem vindo! Qual é o seu nome? ");
const idade = prompt("E quantos anos vc tem? ");
const linguagem = prompt("Qual linguagem de programação está aprendendo? ");
console.log(`Olá ${nome}, vocẽ tem ${idade} anos e já está aprendendo ${linguagem}`);
const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO. `);
analise(resposta);
function analise (resposta){
    let confirmacao = 1;
    do{
        if(resposta == 1){
            return console.log("Muito bom! Continue estudando e você terá muito sucesso.");

        }else if(resposta == 2){
            return console.log("Ahh que pena... Já tentou aprender outras linguagens?");
        }else {
            console.log("Resposta invalida !!");
            resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO. `);
            confirmacao = 0;
        }
    }while(confirmacao == 0);
}



