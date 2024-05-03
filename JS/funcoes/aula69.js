// argumentos que sustentam todos os argumentos enviados
function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b = 2){
    b = b || 0;
    console.log(a + b);
}
funcao2(2)

function funcao3(a, b = 2, c = 4){
    console.log(a + b + c);
}
funcao3(2, null, 20);

function funcao4({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = ({ nome: 'Augusto', sobrenome: 'Pontes', idade: 20});
funcao4(obj)

function funcao5([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao5(['Augusto Pontes', 'C.', 20])
                                            // RestOperator(sempre o último elemento)
const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('/', 1, 20, 30, 40, 50);

const conta2 = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
    //console.log(arguments)
}
conta2('+', 1, 20, 30, 40, 50);

const conta3 = (...args) => {
    console.log(args);
    //console.log(arguments)
}
conta3('+', 1, 20, 30, 40, 50);