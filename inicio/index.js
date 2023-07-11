// let idioma = prompt("Escolha uma linguagem");
// let variacao = prompt("Por favor digite a Variação");

// if(idioma == "pt" &&  (variacao == "br" || variacao == "pt")){
//   alert("Olá mundo");
// }else if(idioma == "en" && variacao == "us"){
//   alert("Hi");
// }else if (idioma == "en" && variacao == "gb"){
//   alert("Hello");
// } else{
//   alert("Esse idioma nao esta pre configurado");
// }


// let i = 10;

// while (i <= 10){
//   console.log('ALexandre');
// i = i + 1
// }

function soma (a, b) {
 return a + b
}

function sub (a, b) {
  return a - b
}

let n1 = Number(prompt("Digite um numero"));
let n2 = Number(prompt("Digite outro numero"));
let op = prompt("Escolha um operador");

if (op == "+") {
  let resultado = soma(n1, n2)
  alert(resultado);
} else if (op == "-"){
  let resultados = sub(n1, n2)
  alert(resultados);
} else {
  alert("Operador não indentificado");
}