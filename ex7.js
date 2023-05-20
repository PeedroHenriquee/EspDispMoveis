const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

//funcao para encontrar o quadradro
function calcularQuadradro(numero){
    return numero * numero;
}

//array para armazenar os numeros

let numeros = [];

//funcao para receber numero

function recebeNumero(){
    rl.question("Digite um numero: ", (numero) => {
        numeros.push(Number(numero));

        if (numeros.length < 5){
            recebeNumero();
        
        }else{
            imprimirQuadrado();
            rl.close();
        }
    });
}

//funcao que imprimi o quadrado de cada numero
function imprimirQuadrado(){
     console.log("quadrados dos numeros informados:");
     for (let i = 0; i < numeros.length; i++){
        const quadrado = calcularQuadradro(numeros[i]);
        console.log(numeros[i] + ' ao quadrado é: ' + quadrado);
     }
}

recebeNumero()