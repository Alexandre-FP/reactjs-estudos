// O js tenta converter dados, por isso o usso do `==` pode ocasionar problema

// Ex

console.log("1" == 1);
console.log(1 == true);// nunca desse jeito
console.log(null == undefined);

// Para solucionar esse problema este problema utilizamos a comparação estrita (identico)

console.log("1" === 1);
console.log(1 === true); //sempre ussa dessa forma
console.log(null === undefined);
console.log(null !== undefined);