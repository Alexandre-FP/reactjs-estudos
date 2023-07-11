const mult = function (n){ /* tomar cuidado ao declarar um function atrabuida de uma varival 
pq se eu chama minha function que eu atrabui em uma varivel em uma outra function ela nao 
vai esta declarada, como ela nunca existiu*/ 
    n *= n;
     return n;
}
  

console.log(mult(10));