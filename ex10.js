const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaAlturas = 0;
let contadorAlturas = 0;

function receberDadosPessoa() {
  rl.question('Informe a idade da pessoa: ', (idade) => {
    idade = Number(idade);

    if (idade <= 0) {
      calcularMediaAlturas();
      rl.close();
    } else {
      rl.question('Informe a altura da pessoa (em metros): ', (altura) => {
        altura = Number(altura);

        if (idade > 50) {
          somaAlturas += altura;
          contadorAlturas++;
        }

        receberDadosPessoa();
      });
    }
  });
}

function calcularMediaAlturas() {
  if (contadorAlturas > 0) {
    const mediaAlturas = somaAlturas / contadorAlturas;
    console.log('Média das alturas das pessoas com mais de 50 anos: ' + mediaAlturas.toFixed(2) + ' metros');
  } else {
    console.log('Não há pessoas com mais de 50 anos para calcular a média das alturas.');
  }
}

receberDadosPessoa();
