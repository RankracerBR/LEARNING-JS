function soma(a, b){
    return a + b;
}
console.log(soma(5, 2));

function soma2(a, b){
    console.log(a + b);
}
soma2(5, 2)

/*document.addEventListener('click', function (){
    document.body.style.backgroundColor = 'red';
}); */

function criaPessoa(nome, sobrenome){
    return { nome: nome, sobrenome: sobrenome };
};

const p1 = criaPessoa('Augusto', 'Pontes');
const p2 = {
    nome: 'Augusto',
    sobrenome: 'Pontes'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

function criaMultiplicador(multiplicador){
    // multiplicador 
    return function(n){
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));