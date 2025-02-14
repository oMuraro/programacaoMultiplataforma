const prompt = require('prompt-sync')();

const n1 = prompt("Insira o preço: ");
const n2 = prompt("Insira o desconto: ");

const result = n1 - (n1 * n2/100);

console.log(result); 