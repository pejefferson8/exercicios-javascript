/*Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis. Sendo elas:
1 - Preço Etanol
2 - Preço Gasolina
3 - Tipo de combustível que está no carro
4 - Gasto médio de combustível do carro por KM
5 - distância em KM da viagem

Imprima o valor que será gasto para realizar essa viagem.
*/
let precoCombustivel = 4.89;
let kmPorLitro = 16;
let distanciaKm = 174;

let litroGasto = distanciaKm / kmPorLitro;
let valorGasto = litroGasto * precoCombustivel;

console.log(valorGasto.toFixed(2));