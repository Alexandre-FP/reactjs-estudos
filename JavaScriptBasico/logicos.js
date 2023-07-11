// Ou
console.log(false || false); // se tudo for falso == false
console.log(true || false); // se umas da considoçes for true == toda a operação vai ser true 
console.log(false || true); // se umas da considoçes for true == toda a operação vai ser true
console.log(true || true); // se umas da considoçes for true == toda a operação vai ser true

console.log('#####################################################################################');

// And
console.log(false && false); // se tiver alguma condição false a operação inteira vai ser falso idepedente se tiver muitos condiçes verdadeiras
console.log(true && false);  // se tiver alguma condição false a operação inteira vai ser falso idepedente se tiver muitos condiçes verdadeiras
console.log(false && true);   // se tiver alguma condição false a operação inteira vai ser falso idepedente se tiver muitos condiçes verdadeiras
console.log(true && true); // se a condição for toda verdadeira == true

console.log('#####################################################################################');

// Not
console.log(!(10 < 5)); // ele barra a expressao 
console.log(!true);
console.log(!false); 
console.log(!10 < 5 && 'A' == 'A');