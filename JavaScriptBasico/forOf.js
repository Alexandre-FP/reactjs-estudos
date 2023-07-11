// for sempre é utilizado sempre quando nos quisermos percorrer uma lista, normalmente um array

const nomes = ["Alexandre", "Maria", "Paulo", "Marcelo"];

// for(let i = 0; i < nomes.length; i++){ // eu sou uso o for se eu precisar utilizar a varialvel [i] no caso o indice
//  console.log(nomes[i]);
// }

for(const nome of nomes){ // diferente do for of, estou interessado apenas no conteudo que tem no meu array
    console.log(nome);
}
