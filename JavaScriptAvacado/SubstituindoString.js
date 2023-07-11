let frase = "Eu sou um cara Legal!"; //substituir um valor para outro
console.log(frase.replace("Eu", "Alexandre"));

let value = 12345
console.log(value.toFixed(2).replace(".", ",")); //metodo antindo de internacionalizção de números(sem a API Intl)
//mais o certo mesmo é usar a funçao proprio do JS que é Intl.NumberFormat