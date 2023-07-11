// filtra um determinado array
// jeito certo de fazer im filtro seja de um array ou um obj
// possa tambem fazer com operadores logicos

const numero = [10, 18, 1, 15];



let res = numero.filter((n) => n > 10 ); // retornando numeros maio que 10 
console.log(res);

const pessoas = [
  {name: "Alexandre", gender: "M", age: 22},
  {name: "Biel", gender: "M", age:14 },
  {name: "Nanda", gender: "F", age:18 },
]

let result = pessoas.filter((n) => n.age >= 18 && n.gender === "M"); // retornando pessoas maior de idade e o genero
console.log(result);