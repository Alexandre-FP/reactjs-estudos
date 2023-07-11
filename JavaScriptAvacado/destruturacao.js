// let set = [1, 2, 3, 4, 5];

// let [n1, n2] = set; 

function myfunction(){ // jeito certo de fazer a destruturação
    const x = 10;
    const y = 400;

    return [x, y];
}

const [x, y] = myfunction();
console.log("x", x);
console.log("y", y);