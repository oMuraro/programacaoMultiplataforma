const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ");

const palavras = frase.split(" ");

console.log(palavras.length);