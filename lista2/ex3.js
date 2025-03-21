const prompt = require("prompt-sync")();

const numeros = [];

const qntNumeros = prompt("Insira a quantidade de numeros: ");

for(let i = 0; i < qntNumeros; i++){
    const numero = prompt("Insira o numero: ");
    numeros[i] = numero;
}

let soma = numeros.reduce((acumulador, valorAtual) => acumulador + parseInt(valorAtual), 0);
console.log(soma);