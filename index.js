function calcular() {
  var formulario = document.getElementById("formulario");
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value / 100;

  var imc = peso / (altura * altura);
  formulario.imc.value = imc.toFixed(2);

  if (imc < 18.5) {
    alert("Você Abaixo do Peso");
  } else if (imc <= 24.9) {
    alert("Peso Normal");
  } else if (imc <= 29.9) {
    alert("Sobrepeso");
  } else if (imc <= 34.9) {
    alert("Obesidade Grau 1");
  } else if (imc <= 39.9) {
    alert("Obesidade Grau 2");
  } else if (imc >= 40) {
    alert("Obesidade Grau 3");
  } else {
    alert("Digite um valor válido.");
  }
}
