//Faça um programa que receba dois números e mostre o menor.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

//funcao para verificar o numero menor

function menorNumero(numero1, numero2){
    if (numero1<numero2){
        return numero1;
    }else{
        return numero2;
    }
};

//recebe os numero digitados pelo usuarios
rl.question('Digite o numero: ', (numero1) =>{
    rl.question('Digite o outro numero: ', (numero2) =>{

        console.log(menorNumero(numero1, numero2));

        rl.close();
    });

});