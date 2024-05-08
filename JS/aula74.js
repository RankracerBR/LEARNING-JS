// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Pontes';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Augusto'));   
    }

    falaNome();
    console.log(idade,peso,altura);

})(30, 80, 1.80);

(function () {

})();

const nome = 'Qualquer coisa';