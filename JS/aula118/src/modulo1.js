const nome = 'Augusto';
const sobrenome = 'Mello';
const idade = 22;

function soma(x, y) {
    return x + y;
}

export default class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}