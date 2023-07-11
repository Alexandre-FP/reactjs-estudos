// arguements é uma função(palavra reservada) do javascript para percorrer basicamente os argumentos passados para minha function
function soma(){ // nao necessesariamente preciso parra um paramentro para  minha função, exp(mais eu posso fazer que os argumentos seja obrigatorios)
    let result = 0 // inicializando uma varavel em 0 para percorrer meu laço e assim somas todos os valores passado para a function
     for (const n of arguments){
       result += n;          
 } 
     return result;
}

console.log(soma(4, 5, 1, 2));