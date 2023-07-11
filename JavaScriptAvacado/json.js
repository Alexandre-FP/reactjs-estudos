const pessoa = {
    nome: "Alexandre",
    idade: 22,
    endereco :{
     rua: "Professor carmo cascardo",
     numero: "84",
     complemnto: "casa",
     bairro: "Avenida",
     cidade: "Itajubá",
    }
}


//se tenta concatena uma string em um obg vai aparecer [object, object]
console.log(JSON.stringify(pessoa)); // convertando meu obg para string
const convert = '{"nome":"Alexandre","idade":22,"endereco":{"rua":"Professor carmo cascardo","numero":"84","complemnto":"casa","bairro":"Avenida","cidade":"Itajubá"}}';
console.log(JSON.parse(convert));// fazendo ao contrario, pegando os meu dados em formato string e retornando a ele como um object