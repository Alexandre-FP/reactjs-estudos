let pessoas = ["Alexandre", "Biel", "Fabricio"];

// retornar elemntos especificos de um array
console.log(pessoas[2]);
console.log(pessoas[pessoas.length - 1]); //retorna o ultimo elemento

// retornar "fatias" de um array
console.log(pessoas.slice(2))// retorna alguns elemntos do array, colocando um parametro de onde quero começar
console.log(pessoas.slice(1, 2))

// adicionar novos elemntos no array (inicio e fim)
pessoas.push("Ana"); // adicionando um novo elemnto no meu array, mais ao final dele
pessoas.unshift("Lazara") // adcionando no inicio do meu array

// remover elemntos no array (inicio e fim)
pessoas.pop()// remover um elemento no fim do meu array
pessoas.shift()// remove no inicio do meu array
console.log(pessoas.pop());// ele  retorna o objeto que sera removido do meu array, vale tambem o metodo shift()

// remover "fatias" de um array
pessoas.splice(1, 2);

// localizar elementos
let index = pessoas.indexOf("Ana");
pessoas.splice(index, 4)

console.log(pessoas);