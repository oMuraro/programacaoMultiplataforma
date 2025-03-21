const prompt = require('prompt-sync')();

const n1 = prompt("Insira o valor: ");
const n2 = prompt("Insira o expoente: ");

let result = 1;

for(let i = 0; i< n2;i++) {
    result *= n1;
}

console.log(result);