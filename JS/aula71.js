const nome = 'Augusto';

function falaNome(){
    const nome = 'Pontes';
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otávio';
    falaNome(nome);
}
usaFalaNome();