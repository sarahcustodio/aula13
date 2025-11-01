let peso = Number(prompt("Digite seu peso (kg):"));
let altura = Number(prompt("Digite sua altura (m):"));

const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else if (imc < 35) {
  console.log("Obesidade Grau I");
} else if (imc < 40) {
  console.log("Obesidade Grau II");
} else {
  console.log("Obesidade Grau III");
}