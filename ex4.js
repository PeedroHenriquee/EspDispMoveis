//Faça um programa que receba três números e mostre o maior.
//Faça um programa que receba dois números e mostre o menor.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

//funcao para verificar o numero menor

function menorNumero(numero1, numero2, numero3){
    if (numero1>numero2 && numero1>numero3){
        return numero1;
    }else if(numero2>numero3 && numero2 > numero1){
        return numero2;
    }else if(numero3>numero1 && numero3 > numero2){
        return numero3;
    }else{
        return 'numero igual';
    }
};

//recebe os numero digitados pelo usuarios
rl.question('Digite o numero: ', (numero1) =>{
    rl.question('Digite o outro numero: ', (numero2) =>{
            rl.question('Digite o outro numero: ', (numero3) => {
                console.log(menorNumero(numero1, numero2, numero3));
                rl.close();
            });
    });

});