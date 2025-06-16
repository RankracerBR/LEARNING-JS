// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave
        value: function () {
            return estoque;
        }, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: false, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
        preco: {
            enumerable: false, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave)
}