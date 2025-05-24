const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 !== 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
// console.log(total);

const pessoas = [
    {nome : 'Augusto', idade: 21},
    {nome : 'Maria', idade: 70},
    {nome : 'Eduardo', idade: 25},
    {nome : 'Leticia', idade: 35},
    {nome : 'Rosana', idade: 22},
    {nome : 'Wallace', idade: 1000},
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);