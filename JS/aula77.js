// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){
        console.log(this.nome + ` ${ID}`)
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    };
    this.metodoInterno = metodoInterno
}

const p1 = new Pessoa('Augusto', 'Pontes');
const p2 = new Pessoa('Julia', 'Graziely');
p2.metodo();
p2.metodoInterno();