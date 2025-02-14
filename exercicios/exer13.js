const prompt = require('prompt-sync')();

const n1 = prompt("Insira o capital: ");
const n2 = prompt("Insira os juros: ");
const n3 = prompt("Insira o periodo: ");

const result = parseFloat(n1) * parseFloat(n2) * parseFloat(n3);

console.log(result);