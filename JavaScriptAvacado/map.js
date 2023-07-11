// map retorna um array manipulado

const numeros = [1, 2, 3, 4, 5,];

const double = numeros.map((n) => n * 2); // fazendo a multiplicação de cada elemento dentro do meu array
// console.log(double);

const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]; // convertando fahrenheit para celcius
const celcius = fahrenheit.map((t) => Math.round((t - 32) * 5) / 9);
// console.log(celcius);

const pessoas = [
    { name: "Alexandre", age: 22},
    { name: "Biel", age:14 },
    { name: "NaNda", age:18 },
];

const newPessoas = pessoas.map((p) => p.name.toUpperCase()); // retornando os nomes do meu obj em tudo letra Maiscula
console.log(newPessoas);

