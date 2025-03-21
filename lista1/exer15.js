const prompt = require('prompt-sync')();

const n1 = prompt("Insira os dias: ")

const horas = n1 * 24;
const minutos = horas * 60;
const segundos = minutos * 60;

console.log("Horas: " + horas) 
console.log("Minutos: " + minutos) 
console.log("Dias: " + segundos) 