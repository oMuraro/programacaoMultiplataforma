console.log("Hello World!");
let nome = "João";
console.log(nome);
nome = "Maria";
console.log(nome);

const valor = 10;
console.log(valor);

let total = 5 + parseInt("5");
console.log(total);

let nota = 5;
if(nota >= 9){
    console.log("Bom");
} else if(nota >= 7){
    console.log("Ok");
} else{
    console.log("Estude");
}

let diaSemana = 3;
switch(diaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Invalido");
}

for(let i=0; i<5; i++){
    console.log("Laço FOR: " + i);
}

let cont = 0;
while(cont < 5){
    console.log("Laço WHILE:" + cont);
    cont++;
}

let cont2 = 0;
do{
    console.log("Laço DO WHILE:" + cont2);
    cont2++;
} while(cont2 < 5);

function somar(a, b){
    return a + b;
}

const soma = (a, b) => {
    return a + b;
};

console.log(soma(3, 4))

const prompt = require('prompt-sync')();
nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite a sua idade: ");

console.log(`Nome:  ${nome} - Idade: ${idade}`)