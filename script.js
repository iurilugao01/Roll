const result = document.querySelector("#result");
function roll(X) {
  const rollN = Math.floor(Math.random() * X) + 1;
  return rollN;
}

document.querySelector("#d20").addEventListener("click", function () {
  const resultado = roll(20);
  result.value = resultado;
});
document.querySelector("#d12").addEventListener("click", function () {
  const resultado = roll(12);
  result.value = resultado;
});
document.querySelector("#d8").addEventListener("click", function () {
  const resultado = roll(8);
  result.value = resultado;
});
document.querySelector("#d6").addEventListener("click", function () {
  const resultado = roll(6);
  result.value = resultado;
});
document.querySelector("#d4").addEventListener("click", function () {
  const resultado = roll(4);
  result.value = resultado;
});
document.querySelector("#d100").addEventListener("click", function () {
  const resultado = roll(100);
  result.value = resultado;
});
