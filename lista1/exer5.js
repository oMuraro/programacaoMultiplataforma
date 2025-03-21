const prompt = require('prompt-sync')();

const raio = prompt("Insira raio do circulo: ");

const area = 3.14 * raio ** 2;

console.log(area);