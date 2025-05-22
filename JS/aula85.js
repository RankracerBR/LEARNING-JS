const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


const pessoas = [
    {nome : 'Augusto', idade: 21},
    {nome : 'Maria', idade: 40},
    {nome : 'Eduardo', idade: 25},
    {nome : 'Leticia', idade: 35},
    {nome : 'Rosana', idade: 22},
    {nome : 'Wallace', idade: 50},
]

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj}; // SpreadOperator(copia o objeto)
    newObj.id = indice
    return newObj;
})

console.log(pessoas);
console.log(comIds);