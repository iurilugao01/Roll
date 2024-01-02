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
