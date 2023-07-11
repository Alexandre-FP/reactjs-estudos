const pessoa = {
    name: "Alexandre",
    age: 21,
    adress:{
        rua: "Av",
        cidade: "Itajuba"
    },
}

pessoa.name = "Xand" //redeclarando meu valor dentro de um object
pessoa.apelido = "Ale" // adicioando mais atributos para o meu object

console.log(pessoa); //colocando meu object ein `${pessoa}` dessa forma ele me retorna [OBJECT OBJECT]
// para tratar isso eu coloco os seguintes comandos
console.log(`${JSON.stringify(pessoa)}`)
console.log(pessoa.name) //acessar meu object