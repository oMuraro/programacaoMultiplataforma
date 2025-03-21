const prompt = require('prompt-sync')();

const nomes = [];

const qntNomes = prompt("Insira quantos nomes deseja inserir: ");

for(let i = 0; i < qntNomes; i++){
    const nome = prompt("Insira o nome: ");
    nomes.push(nome);
}

console.log("Esses são os nomes: " + nomes.sort());