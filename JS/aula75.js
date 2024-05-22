// Factory function (Funão fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        fala(assunto = 'Falando sobre nada'){
            return `${this.nome} está ${assunto}.`
        },
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); // Array
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },

        altura: altura,
        peso: peso,
        
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Augusto', 'Pontes', 1.8, 80);
const p2 =  criaPessoa('Gabriel', 'Almeida', 1.90, 57);
const p3 =  criaPessoa('Junior', 'Otávio', 1.5, 110);
console.log(p3.imc)

p1.nomeCompleto = 'Julia Graziely Carneiro';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

