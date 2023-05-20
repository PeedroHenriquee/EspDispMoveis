//Entrar com um número e imprimir uma das mensagens: é múltiplo de 3 ou não é múltiplo de 3

const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const r1 = readline.createInterface({
    output: process.stdout,
    input: process.stdin
});

//função multiplo
function multiploNum(numero){
         if(numero % 3 == 0){
            return "Numero multiplo de 3";
        }else{
            return 'numero nao e multiplo de 3';
        }

};

// Pergunta ao usuário o numero 

r1.question('Digite o numero: ', (numero) => {
    console.log(multiploNum(numero));
    
    r1.close();
});

