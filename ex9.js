const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let somaPares = 0;
let somaImpares = 0;

function receberNumeros() {
  rl.question('Informe um número: ', (numero) => {
    numeros.push(Number(numero));

    if (numeros.length < 10) {
      receberNumeros();
    } else {
      calcularSomas();
      rl.close();
    }
  });
}

function calcularSomas() {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      somaPares += numeros[i];
    } else {
      somaImpares += numeros[i];
    }
  }

  console.log('Soma dos números pares: ' + somaPares);
  console.log('Soma dos números ímpares: ' + somaImpares);
}

receberNumeros();
