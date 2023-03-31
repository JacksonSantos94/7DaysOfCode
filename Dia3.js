// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de 
//Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando 
//na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma 
//mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.
// Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok 
//para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para 
//ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem 
//comentando algo sobre a linguagem inserida.

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir 
//aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na 
//lista de aprendizado.
var prompt = require('prompt-sync')();
let linguagem;
let arma;
let Tecnologia;
let especialização;
console.log("Olá bem vindo ao desafio de aprendizado da Alura! \n");
console.log("Sou seu guia estou aqui para ajudar na sua trajetoria.\nPara isso preciso saber para qual área do conhecimento vocẽ possui maiores aptidões ou anseios de conhecimento.\n");
console.log("Vc prefere a emoção da frente de batalha dos que trilham o caminho do Front-End ou prefere entrar no mundo de conhecimento\nsombrios e dominar as artes ocultas do Back-End?\n");
const caminho = prompt("Qual caminho vc vai trilhar?\nDigite 1 para Front-end ou 2 para Back-End: ");
if(caminho == 1){
    linguagem = "Front-End";
    caminhoEscolhido(linguagem);
    escolhaSuaArmaFront();
    }else if(caminho == 2){
        linguagem = "Back-End";
        caminhoEscolhido(linguagem);
        escolhaSuaArmaBack();
    }else{
        morte();
    }

function caminhoEscolhido(liguagem){
    console.log(`\nParabéns vc escolheu a emoção da batalha do ${linguagem} que seus inimigos pereçam diante dos seus códigos.\n`);
    console.log(`Porem, para que vc possa trilhar seu caminho vc precisa de uma arma.\nAlgo que seja eficaz e te permita aproveitar o máximo do poder do desenvolvedor que existe dentro de vc...\n`);
}

function escolhaSuaArmaFront(){
    arma = prompt(`Para sua sorte tenho duas excelentes armas aqui qual vc quer? 
Digite 1 para React ou 2 para Vue: `);
    if(arma == 1){
        tecnologia = "React";
        armaEscolhida(tecnologia, linguagem);
        especializacaoEscolhida();
    }else if(arma == 2){
        tecnologia = "Vue";
        armaEscolhida(tecnologia, linguagem);
        especializacaoEscolhida();
    }else{
        morte();
    }
}

function escolhaSuaArmaBack(){
    arma = prompt(`Para sua sorte tenho duas exelentes armas aqui qual vc quer? 
    Digite 1 para C# ou 2 para Java: `);
    if(arma == 1){
        tecnologia = "C#";
        armaEscolhida(tecnologia, linguagem);
        especializacaoEscolhida();
    }else if(arma == 2){
        tecnologia = "Java";
        armaEscolhida(tecnologia, linguagem);
        especializacaoEscolhida();
    }else{
        morte();
    }
}

function  armaEscolhida(tecnologia, linguagem){
    linguagem == "Front-End" ? linguagemOposta = "Back-End" : linguagemOposta = "Front-End";
    console.log(`\nBela escolha, com essa arma vc pode derrotar os mais temiveis bugs ou derrubar facilmente sua pagina html use seu poder 
com sabedoria...\n`);
    console.log(".\n.\n.\n.\n");
        console.log(`Anos se passaram suas habiidades em ${tecnologia} aumentaram e agora chegou a hora de decidir qual novo camiho trilhar...\n`);
        console.log(`Vc deseja se tornar um grande mestre e se especializar ainda mais no caminho do ${linguagem}?
Ou gostaria de unir seu conhecimento atual com os misterios do ${linguagemOposta} e se tornar um mestre FullStack?\n`);
}

function especializacaoEscolhida(){
    especializacao = prompt(`Digite 1 para Especialização ou 2 para FullStack: `);
        if(especializacao == 1){
            const escolhaFinal = "Especialização";
            especialidade(escolhaFinal);
        }else if(especializacao == 2){
            const escolhaFinal = "Fullstack";
            especialidade(escolhaFinal);
        }else{
            morte();
        }
}

function especialidade(especializacao){
    const vetEspecializacao = [];
    let pretencoes = prompt(`\nParabens, vc escolheu o caminho da ${especializacao} agora ninguem poderá contra o seu poder, porem, para se manter no topo 
vc não pode relaxar e deve sempre buscar mais e mais conhecimento. Quais outras tecnologias da programação deseja dominar? 
Fique a vontade para digitar...`);
    vetEspecializacao.push(pretencoes);
    let escolha;
    do{
        escolha = prompt(`Sua ultima escolha foi ${pretencoes} tem mais alguma que gostaria de aprender?
        digite 's' - Para SIM ou 'qualquer outra tecla' Para Não: `);
    if(escolha ==='s'){
        pretencoes = prompt(`Sua ultima escolha foi ${pretencoes} qual outra tecnologia quer aprender?`);
        vetEspecializacao.push(pretencoes);
    }else{
    console.log(`Parabens, seu arsenal sera composto por: ${vetEspecializacao}\n`);
    console.log("Seu futuro será grandioso que os deuses do desenvolvimento possam contemplar suas conquistas...\n");
    console.log("Não tenho mais nada a te ensinar esse é o fim do nosso encontro a partir de agora vc deve trilhar seu proprio caminho...");
    return 0;
    }
}while(escolha ==='s');
}

function morte(){
    console.log(`Esse é seu tragico fim no caminho para o ${tecnologia} que sua alma descanse em paz !!`);
}