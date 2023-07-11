console.log(`Alexandre/'Fernandes Pereira'`); // string

// ------------------------------------------------------

console.log(1.2); //Number, interios e floats

console.log(Math.PI); // Numeros pre programdos
console.log(Math.E);

// ------------------------------------------------------

// boolean, pode ser apenas dois valores, true ou false
// boolean, serve para expressar valores com dois estados como por exemplo, cliente registrado(True) ou (False)
console.log(true); // true
console.log(false);// false

// ------------------------------------------------------

//Infinity                                      
console.log(Infinity);
console.log(1 / 0);

// ------------------------------------------------------

//NaN (not a number)
console.log(NaN);
console.log("A" / 2); // Isso me retorna um NaN
console.log(typeof NaN);

// ------------------------------------------------------

//null e undefined
console.log(null); // null, siguinifica nulo, ausencia de valor
console.log(undefined); // indefinido, identificar um valor de uma variavel
console.log(typeof undefined);

// ------------------------------------------------------

// obj = objeto
console.log({propriedade:"Valor"}); // obj apresetando por chaves

console.log({
    nome: "Alexandre",
    idade: 21,
    id: 1,
    endereco: {
      rua: "Professor",
      bairro: "Av",
      numero: 84
    }
})


// ------------------------------------------------------

//Array
console.log([1, 2, 3, "A",{ 
    nome: "Alexanre", idade: 21 
} ]); // varios valores dentro de um conjuntos, podemos ter um obj dentro de um array

// ------------------------------------------------------

//Date (Data)
console.log(Date()); // data e hora corrente => new Date()
console.log(new Date()); // data e hora corrente
console.log(new Date(2022, 3, 22)); // data especifica e hora corrente
console.log(new Date(2022, 3, 22, 10, 20, 59)); // data e hora
