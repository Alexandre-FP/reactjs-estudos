const pessoa = [
    {
      id: 1,
      nome: "Alexandre",
      ultimoNome: "Fernandes",
      niver: new Date(2001, 6, 12),
      endereco:{
        cidade: "Itajuba",
      },
    },
    {
      id: 2,
      nome: "Biel",
      ultimoNome: "Fernandes",
      niver: new Date(2005, 6, 12),
      endereco:{
        cidade: "Itajuba",
      },
    },
]

console.log(JSON.stringify(pessoa)); // converte meu obg em
//JSON(String) para que outras linguagens posso entender meu obj seja php, banco de dados e etc

const json = '[{"id":1,"nome":"Alexandre","ultimoNome":"Fernandes","niver":"2001-07-12T03:00:00.000Z","endereco":{"cidade":"Itajuba"}},{"id":2,"nome":"Biel","ultimoNome":"Fernandes","niver":"2005-07-12T03:00:00.000Z","endereco":{"cidade":"Itajuba"}}]'
console.log(JSON.parse(json));// converte uma string de informação
//para um obj dentro do javascript
