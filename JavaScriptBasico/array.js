// const pessoas = ["Alexandre", "Gabriel", "Ana"];

const pessoas = [{ // colocando um object dentro de um array
    name: "Alexandre",
    idade: 21
}];

pessoas[0] = "Ze"; //dando um novo valor para meu indice zero
// pessoa[5] = "Sky"; //colocando um valor novo ao meu array mesmo, mais nao é uma boa pratica fazer isso TOMAR CUIDADO

console.log(pessoas[0]); //acessando o indice do meu array
console.log(pessoas.length); //acessando os indice do meu array