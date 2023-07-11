//variaveis 

const altura = 1.80;
let peso = 60;

var imc = peso / (altura * altura); 
console.log(imc);

//Diferença entre var, let e const

// var pode ser acessivel em qualquer scopo, var é acessivel global

//exemplo de var
var x = 10;

{
    console.log(x);
    x= 20;

    var y = 30;
}

console.log(x);
console.log(y);

//----------------------------------------------

// se eu declaro let local, só consigo acessar essa variavel apenas dentro do local

//exemplo de let
let x = 10;

{
    console.log(x);
    x= 20;

    let y = 30;
}

console.log(x);
console.log(y);

//----------------------------------------------

//exemplo de const
// const sao imutaveis, nao conseguimos redeclarar uma constante colocar um novo valor para ela
// só consigo acessar essa variavel apenas dentro do local

const x = 10;

{
    console.log(x);
    x = 20;

    const y = 30;
}

console.log(x);
console.log(y);


//----------------------------------------------

//Nomes e Regras para variaveis
//Nao pode conter Espaço 
let nomeCompleto = "Alexandre Fernandes";

//precisam iniciar com uma letra, _ ou $
let $nome = "Alexandre";

//Podem conter apenas letras, numeros, _ ou $
let dataNascimento = new Date(2001, 06, 12) 

//Canse-sensitive
let cpf = "137485076-40";
let Cpf = "137485076-40"; //errado de fazer

//Nao podemos usar palavras reservadas como um nome de variavel
let super_ = 123;
