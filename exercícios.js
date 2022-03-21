// 1 - Armazene seu nome em uma variável, depois faça a concatenação com a string  'Olá'  para escrever no console 'Olá SEUNOME'

let nome = "Junior";
let ola = "Olá"

console.log(`${ola} ${nome}`);
console.log("-------------")
// 2. Crie um programa que calcule a média dos valores:
let num1 = 10.5;
let num2 = 33.96;
let num3 = 20.2;
let num4 = 8.4


console.log((num1 + num2 + num3 + num4)/4);
console.log("-------------")

//3  Armazene os nomes de 5 frutas em um array, e escreva no console a fruta que esteja no índice 3.

let listaFrutas = ["Maçã", "Uva", "Laranja", "Banana", "Pera"];

console.log(listaFrutas[3]);
console.log("-------------")

/* 4 Crie um programa que diga qual o comprimento das strings:
'javaScript'
'desenvolvimento'
'1+1'
*/

let string1 = "javaScript";
let string2 = "desenvolvimento";
let string3 = "1+1";

console.log(` A strinhg 1 tem: ${string1.length} caracteres.
 A string 2 tem: ${string2.length} caracteres.
 A string3 tem: ${string3.length} caracteres.`);
 console.log("-------------")

 /*5. Crie uma função para cada uma das operações básicas da matemática (adição, subtração, divisão e multiplicação). As funções devem receber dois parâmetros numéricos e retornar o resultado da operação.*/

 let numero1 = 10;
 let numero2 = 55;

 let adicao = numero1 + numero2;
 let subtracao = numero1 - numero2;
 let divisão = numero1 / numero2;
 let multiplicação = numero1 * numero2;

 console.log(`Adicao: ${adicao}. Subtracao: ${subtracao}. Divisão: ${divisão.toFixed(2)}. Multiplicação: ${multiplicação}`);
 console.log("-------------")

 /*
 6. Crie um programa que identifique se um número é par ou ímpar
 */

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "par" : "impar";
    console.log(i, par);
}
console.log("-------------")

/* 
7 - Crie um programa que identifique se uma pessoa é maior ou menor de idade
*/

function random(min,max) {
    const r = Math.random()* (min,max);
    return Math.floor(r);
}
let rand = random(1,50);
console.log(`A idade aleatória é: ${rand}`)

if (rand >= 18) {
    console.log(`A pessoa tem ${rand} anos, é maior de idade`)
} else {
    console.log(`A pessoa tem ${rand} anos, é menor de idade`)
}

console.log("-------------")

/*
Crie uma função que receba 2 números inteiros como parâmetros, e retorne o maior valor entre eles.
*/

let num_1 = 1
let num_2 = 99

function max(a,b) {
    return Math.max(a,b)
}

console.log(max(num_1,num_2));
console.log("-------------")

/*
9 Crie um programa que armazene seu nome em uma constante, e escreva ele de trás para frente.
*/

const meuNome = "Junior";
console.log(meuNome.split('').reverse().join(''));

/*
10. Crie uma função que receba um valor numérico como parâmetro, e faça as seguintes comparações:
Se o valor de entrada for divisível por 3, então escreva "Fizz" no console.
Se o valor de entrada for divisível por 5, então escreva "Buzz" no console.
Se o valor de entrada for divisível por 3 e 5, então escreva "FizzBuzz" no console.
Se o valor de entrada não for divisível por 3 ou 5, escreva apenas o número no console.

Dica: Qualquer número divisível por 3 ou 5, tem o resto da divisão igual a zero.

*/
console.log("-------------")

function comparar(entrada) {
if (entrada % 3 == 0 && entrada % 5 == 0) {
    console.log("FizzBuzz");
    return;
}
if (entrada % 3 == 0) {
    console.log("FizzBuzz");
    return;
}
if (entrada % 5 == 0) {
    console.log("Buzz")
    return
} else{
return console.log(`O número: ${entrada} Não é um número divisível por 3 ou 5`)}
}


function random3(min,max) {
    const r2 = Math.random()* (min,max);
    return Math.floor(r2);
}


let numeroRand = random3(1,50); //pegar algum número aleatório
console.log(`O número gerado é: ${numeroRand}.`)


comparar(numeroRand)




