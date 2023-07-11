// o objt pode ser acessado de duas formas obj:propriedade ou obg.["i"]

const pessoas = {
    nome: "Alexandre",
    age: 40,
}

for(const i in pessoas){ // for in sempre vai retorna a propriedade daquele objeto, pra eu acessar o valor da propriedade daquelo objeto
    console.log(`${i}:${pessoas[i]}`)
}

