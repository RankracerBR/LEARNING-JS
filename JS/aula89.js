// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

// p1 = (ENDERECOMEMORIA) -> 'Valor'
// p1.ENDERECOMEMORIA = {nome: 'Outra coisa' }
// p1 = (NOVOENDERECOME...)

const p1 = new Pessoa('Augusto', 'Pontes');
delete p1.nome;
const p2 = new Pessoa('Julia', 'Graziely');
console.log(p1);
console.log(p2);