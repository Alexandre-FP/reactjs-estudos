const nivelObesidade = ["Abaixo do Peso", "Peso normal", "Acima do Peso", "Obsidade 1", "Obesidade 2", "Obesidade 3"];
const peso = 40;
const altura = 1.83; 

const imc = peso / (altura * altura)

if (imc >= 39.9) {
    console.log(nivelObesidade[5]);
}else if (imc >= 34.9) {
    console.log(nivelObesidade[4]);
}else if (imc >= 29.9)  {
    console.log(nivelObesidade[3]);
}else if (imc >= 24.9)  {
   console.log(nivelObesidade[2]);
}else if (imc >= 18.5)  {
    console.log(nivelObesidade[1]);
}else if (imc < 18.5)   {
    console.log(nivelObesidade[0]);
}
