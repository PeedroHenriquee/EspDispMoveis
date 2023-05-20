const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pessoas = [];
let contadorIdadeSuperior50 = 0;
let somaAlturas = 0;
let contadorAlturas = 0;
let contadorPesoInferior40 = 0;

function receberDadosPessoa() {
  rl.question('Informe a idade da pessoa: ', (idade) => {
    rl.question('Informe a altura da pessoa (em metros): ', (altura) => {
      rl.question('Informe o peso da pessoa (em quilos): ', (peso) => {
        const pessoa = {
          idade: Number(idade),
          altura: Number(altura),
          peso: Number(peso)
        };
        pessoas.push(pessoa);

        // Verificar idade superior a 50 anos
        if (pessoa.idade > 50) {
          contadorIdadeSuperior50++;
        }

        // Calcular média das alturas das pessoas entre 10 e 20 anos
        if (pessoa.idade >= 10 && pessoa.idade <= 20) {
          somaAlturas += pessoa.altura;
          contadorAlturas++;
        }

        // Verificar peso inferior a 40 quilos
        if (pessoa.peso < 40) {
          contadorPesoInferior40++;
        }

        if (pessoas.length < 25) {
          receberDadosPessoa();
        } else {
          calcularResultados();
          rl.close();
        }
      });
    });
  });
}

function calcularResultados() {
  console.log('Quantidade de pessoas com idade superior a 50 anos: ' + contadorIdadeSuperior50);

  if (contadorAlturas > 0) {
    const mediaAlturas = somaAlturas / contadorAlturas;
    console.log('Média das alturas das pessoas entre 10 e 20 anos: ' + mediaAlturas.toFixed(2));
  } else {
    console.log('Não há pessoas entre 10 e 20 anos para calcular a média das alturas.');
  }

  const percentualPesoInferior40 = (contadorPesoInferior40 / pessoas.length) * 100;
  console.log('Percentual de pessoas com peso inferior a 40 quilos: ' + percentualPesoInferior40.toFixed(2) + '%');
}

receberDadosPessoa();
