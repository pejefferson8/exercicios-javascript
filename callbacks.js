const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2;
}
const resultSoma = calc(soma, 2, 3);
const resultSub = calc(sub, 2, 3);

console.log(resultSoma);
console.log(resultSub);
