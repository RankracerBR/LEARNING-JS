const pessoas = [
    { id: 3, nome: 'Augusto' },
    { id: 2, nome: 'Julia' },
    { id: 1, nome: 'João' }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// for (const pessoas of novasPessoas) {
//     console.log(identifier, id, nome);
// }

novasPessoas.delete(2);
console.log(novasPessoas);