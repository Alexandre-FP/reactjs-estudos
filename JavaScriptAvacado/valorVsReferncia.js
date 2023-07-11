function mult(n){ // variaveis comuns que nao seja um objeto é passada apenas o valor,
  n *= n;
   return n;
}

let n = 10;
console.log(mult(n));

//---------------

function multObj(obj){ /* diferente das variaveis tipo objetos os valores sao passada como referencia*/  
 obj.value *= obj.value;
  return obj;
}

const obj = { 
    value: 10,
};

console.log(multObj(obj));
console.log(obj);
