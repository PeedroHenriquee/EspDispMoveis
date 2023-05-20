const readline = require('readline')

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question('Digite o numero: ', (numero) => {
    console.log('tabuada do ', numero);

    for(let i=1; i<=10; i++){
        let resultado = numero * i;
        console.log(numero + 'x ' ,i ,'=', + resultado)
    }
    rl.close();
});