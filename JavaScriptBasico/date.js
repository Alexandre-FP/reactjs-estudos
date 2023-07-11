// new Date(); // inicializa com a data e hora atual do computador
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
// inicializa com valores pre-definidos.

 // new Date(dateString); // inicializa a partir de uma string

const bornDate = new Date();
const bornDate1 = new Date("2001-06-12T09:00:00.000Z"); // posso passa uma string como data
const today = new Date()

console.log(bornDate1);
console.log(bornDate1.toISOString());
console.log("dia", bornDate1.getDate())
console.log("mes", bornDate1.getMonth() + 1)//sempre coloca somando mais 1 para mostrar a data correta para o usario
console.log("ano", bornDate1.getFullYear())

console.log("idade", today.getFullYear() - bornDate1.getFullYear()); //pra saber a idade atual da pessoa

// biblioteca moment.js para trabalhar com data