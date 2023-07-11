function mult(values, func){ // passando o argumento func da minha arrow function da linha dez
    for(let i = 0; i < values.length; i++){ // percorrendo meu array na linha nove
        values[i] = func(values[i]); // atrbuindo e fazendo a multiplicação da minha function(func)
    }

    return values; // me retornando o resultado do meu array
}

const values = [1, 2, 3, 4, 10];
const func = (n) => n * 2
console.log(mult(values, func)); // passando minha funtion da linha dez para minha function mult()