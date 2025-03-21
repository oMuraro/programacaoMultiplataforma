const prompt = require('prompt-sync')();

const numeros = [];

const qntNumeros = prompt("Insira quantos numeros deseja inserir: ");

for(let i = 0; i < qntNumeros; i++){
    const numero = prompt("Insira o numero: ");
    numeros[i] = numero;
}

console.log(numeros.sort());
console.log(numeros.reverse());