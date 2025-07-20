let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); //Qualquer coisa que não for um ., coloque ''
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));