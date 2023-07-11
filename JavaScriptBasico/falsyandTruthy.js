// Vaores considerados como falso quando
// falso nao quer dizer considerados boolean, só quer dizer que o motor do js considerado aquilo negativo


// false, 0, -0, 0n, "", '', ``, null, undefined, NaN

console.log(0 ? "Verdadiero" : "Falso");

// ----------------------------------------------------

// Vaores considerados como verdadeiro quando

// true, {}, [], 1, 1.2, "0", "false", -1, -1.2, Infinity, -Infinity

console.log(1 ? "Verdadiero" : "Falso");