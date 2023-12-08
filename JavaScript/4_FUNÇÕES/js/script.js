// // 1 - Criando uma função
// function minhaFuncao() {
//   console.log("Testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function () {
//   console.log("Função em variável");
// };

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//   console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParametro("Imprimindo alguma coisa");

// funcaoComParametro("outra função");

// // 2 - return
// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2) {
//   return n1 + n2;
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, d));

// // 3 - escopo da função
// let y = 10;

// function testandoEscopo() {
//   let y = 20;
//   console.log(`Y dentro da função é: ${y}`);
// }

// testandoEscopo();

// y = 15;

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// // 4 - escopo aninhado
// let m = 10;

// function escopoAninhado() {
//   let m = 20;

//   if (true) {
//     let m = 30;

//     if (true) {
//       let m = 40;

//       console.log(m);
//     }
//     console.log(m);
//   }
//   console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - arrow function
// const testeArrow = () => {
//   console.log("Esta é uma arrow function");
// };

// testeArrow();

// const parOuImpar = (n) => {
//   if (n % 2 === 0) {
//     console.log("Par");
//     return;
//   }
//   console.log("Impar");
// };

// parOuImpar(5);

// parOuImpar(10);

// // 6 - mais sobre arrow functions
// const raizQuadrada = (x) => {
//   return x * x;
// };

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(5));

// console.log(raizQuadrada2(12));

// const somaDeIguais = (x) => x + x;

// console.log(somaDeIguais(256));

// console.log(somaDeIguais(256325));

// console.log(somaDeIguais(256327));

// const helloWorld = () => console.log("Hello World");

// helloWorld();

// 7 - parametro opcionais

// const multiplication = function (m, n) {
//   if (n === undefined) {
//     return m * 2;
//   } else {
//     return m * n;
//   }
// };

// console.log(multiplication(5));

// console.log(multiplication(2, 4));

// const greeting = (name) => {
//   if (!name) {
//     console.log("Olá!");
//     return;
//   }
//   console.log(`Olá ${name}! É muito bom revê-lo.`);
// };

// greeting();

// greeting("Orlando");

// 8 - valor default
const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};

console.log(customGreeting("Orlando"));

console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("textando");

repeatText("Agora repete 5 vezes", 5);

// Saudação personalizada pela hora do dia
const horaGreeting = (name) => {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();

  let saudacao;

  if (hora >= 5 && hora <= 12) {
    saudacao = `Bom dia`;
  } else if (hora > 12 && hora <= 18) {
    saudacao = `Boa tarde`;
  } else {
    saudacao = `Boa noite`;
  }
  return `${saudacao}, ${name}!`;
};

const userName = "Orlando";
const saudacaoPersonalizada = horaGreeting(userName);
console.log(saudacaoPersonalizada);
