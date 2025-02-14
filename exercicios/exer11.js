const prompt = require('prompt-sync')();

const n1 = prompt("Insira quantos KG: ");
const n2 = prompt("Insira a altura: ");

const result = n1 / (n2*n2);

console.log(result);