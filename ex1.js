//Faça um programa que receba quatro notas de um aluno, calcule e mostre a média aritmética das notas 
//e a mensagem de aprovado ou reprovado, considerando para aprovação média 7.


const readline = require('readline');

// Cria uma interface para ler a entrada do usuário

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//função para calcular a media das notas

function calcularMedia(nota1, nota2, nota3, nota4){
    const mediaSoma = (nota1 + nota2 + nota3 + nota4) / 4;
    return mediaSoma;
}


// Pergunta ao usuário o numero das notas
r1.question('digite a primeira nota: ', (nota1) => {
    r1.question('Digite a segunda nota: ', (nota2) => {
        r1.question('Digite a terceira nota: ', (nota3) => {
            r1.question('Digite a quarta nota: ', (nota4) => {
                const resultado = calcularMedia(parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), parseFloat(nota4));
                console.log('media', resultado)
                

                if (resultado >= 7){
                    console.log('aprovado');
                }else{
                    console.log('Reprovado');
                }
                r1.close();

            });

        });

    });

});



