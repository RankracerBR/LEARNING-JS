// Filter -> Smpre retorna um arry com a mesma quantidade de elementos ou menos, map, reduce


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor >= 50);
console.log(numerosFiltrados)

// console.log(numerosFiltrados)


const pessoas = [
    { nome: 'Luiz', idade: 40 },
    { nome: 'Maria', idade: 34 },
    { nome: 'Eduardo', idade: 54 },
    { nome: 'Augusto', idade: 21 },
    { nome: 'Wallace', idade: 62 },
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA);