function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

// Instância
const pessoa1 = new Pessoa('Augusto', 'P.'); // <- Pessoa = Função construtora
const data = new Date(); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(data);
