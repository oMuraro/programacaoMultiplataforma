const prompt = require('prompt-sync')();

const altura = prompt("Insira a altura do retangulo: ");
const largura = prompt("Insira a largura do retangulo: ");

const perimetro = 2 * (parseFloat(altura) + parseFloat(largura));

console.log(perimetro);