const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Push
nomes.splice(2, 0, 'Luiz');
console.log(nomes);

// nomes.splice(indice atual, delete, elem1, elem2, elem3, ... elem_n)
// pop
// const removidos = nomes.splice(1, );

// shift
const removidos = nomes.splice(0, 1);

console.log(nomes, removidos);