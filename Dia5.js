var prompt = require('prompt-sync')();

let pergunta = prompt("Olá sou sua lista de compras inteligente gostaria de adicionar algum item a sua lista?\n(Digite: sim ou não)");
pergunta = pergunta.toUpperCase();
let item;
const listaMercado = [frutas=[], carnes=[], legumes=[], laticinios=[]];
let categoria;
do{
    if(pergunta === "SIM"){
        item = prompt("Ok, qual item deseja incluir na lista? ");
        categoria = prompt(`Ok e em qual categoria deseja incluir o ${item} ?
CATEGORIAS DISPONIVEIS (Digite o numero para selecionar): 
0-Frutas, 1-Carnes, 2-Legumes, 3-Laticinios: \n`);
        listaMercado[categoria].push(item);
        pergunta = prompt("Quer continuar?(Digite: Sim ou Não): ");
        pergunta = pergunta.toUpperCase();
    }else{
        console.log("Dados invalidos encerrando lista.");
        return 0;
    }
}while(pergunta === "SIM");

console.log(percorreExibe());
return 0;

function percorreExibe(){
    const categorias = ["FRUTAS", "CARNES", "LEGUMES", "LATICÍNIOS"];
    console.log("Lista de compras: ");
    for(categ of categorias){
        console.log(`${categ}:
${listaMercado[categorias.indexOf(categ)]},`);
    }
}
