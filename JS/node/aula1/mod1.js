class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Augusto';
const sobrenome = 'Pontes';

exports.nome = nome
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';
module.exports = {
    Pessoa
}
