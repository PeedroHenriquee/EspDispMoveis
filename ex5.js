const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

//funcao media:

function mediaNumero(numero1, numero2){

    return  (numero1 + numero2) / 2;
    
}

//funcao numero maior
function maiorMenor(numero1, numero2){
    if(numero1>numero2){
        return numero1;
    }else{
        return numero2;
    }
}

//funcao produto
function Produto(numero1, numero2){
    const numero = numero1 * numero2;
    return numero;
}

//funcao dividir

function Divisao(numero1, numero2){
    const numero = numero1 / numero2;
    return numero;
}

//recebe os numeros digitados pelo usuarios

rl.question('Digite o primeiro numero: ', (numero1) => {
    rl.question('Digite o segundo numero: ', (numero2) => {
        rl.question('digite um numero:\n 1) Média entre os numeros:' + '\n' + '2)maior ou menor : \n 3)produto: \n 4)divisão: \n', (digitado) =>{
           
        
        
        const resultado1 = mediaNumero(numero1, numero2);
        const resultado2 = maiorMenor(numero1, numero2);
        const resultado3 = Produto(numero1, numero2);
        const resultado4 = Divisao(numero1, numero2);

        if(digitado == 1){
            console.log(resultado1);
        }else if(digitado == 2){
            console.log(resultado2);
        }else if(digitado == 3){
            console.log(resultado3);
        }else if(digitado == 4){
            console.log(resultado4);
        }else{
            console.log('resultado nao encontrado:')
        }
        rl.close();

    });

    });
    
});