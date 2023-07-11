// Formatação para numeros
/* 
 toFixed() arredonda pra cima
 Match.ceil() arredonda para cima
 Math.floor() arredonda para baixo
 Math.round() parecido com o floor
 new Intl.NumberFormat().format
*/

let value = 1234.255
console.log(value.toFixed(1));
console.log(Math.ceil(value));
console.log(Math.floor(value));
console.log(Math.round(value));

console.log( new Intl.NumberFormat("pt-BR", { // formatação para moeda brasileira(real)
   style: "currency",
   currency: "BRL",
 }).format(value)
)