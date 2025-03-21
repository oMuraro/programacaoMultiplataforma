const prompt = require('prompt-sync')();

const f = prompt("Insira a temperatura em Fahrenheit: ");

const celsius = (parseInt(f) - 32) * 5/9;

console.log(celsius);