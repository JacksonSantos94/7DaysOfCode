var prompt = require('prompt-sync')();

let pergunta = prompt("Olá gostaria de adicionar algum item a sua lista de compras?\n(Digite: sim ou não)");
pergunta = pergunta.toUpperCase();
let item;
const frutas = [];
const carnes=[];
const legumes =[];
const laticinios = [];
const listaMercado = [frutas,carnes,legumes,laticinios];
let categoria;
do{
    if(pergunta === "SIM"){
        item = prompt("Ok, qual item deseja incluir na lista?");
        categoria = prompt(`Ok e em qual categoria deseja incluir o ${item}?
CATEGORIAS DISPONIVEIS (Digite o numero para selecionar): 
0-Frutas, 1-Carnes, 2-Legumes, 3-Laticinios: \n`);
        listaMercado[categoria].push(item);
        console.log("Lista Atual: "+listaMercado);
        pergunta = prompt("Para adicionar um item responda: Sim.\nPara remover um item responda: Remover.\nPara encerrar reponda: Não.\n");
        pergunta = pergunta.toUpperCase();
    }else if(pergunta === "REMOVER"){
        removeItem();
        pergunta = "SIM";
    }else{
        console.log("Dados invalidos encerrando lista.");
        return 0;
    }
}while((pergunta === "SIM")||(pergunta ==="REMOVER"));

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

function removeItem(){
    console.log("Está é a sua lista de compras até o momento:\n");
        console.log(listaMercado);
        item = prompt("Digite o item que quer remover:");
        const verificando = verificacaoLista();
        if(listaMercado[verificando].includes(item) === true){
            let indice = listaMercado[verificando].indexOf(item);
            console.log("Vou remover o intem do index"+ indice);
            listaMercado[verificando].splice(indice, 1);
            console.log(`O item '${item}' foi removido com sucesso.\n`);
        }
        else{
            console.log(`Item não encontrado verifique se digitou corretamente.
Essa é sua lista de compras atual:\n${listaMercado}`);
        }
}

function verificacaoLista(){
    for(let i=0; i<listaMercado.length; i++){
            if(listaMercado[i].includes(item) === true){
                return i;
            }else{
                let conta =+ 1;
            }
        }
}