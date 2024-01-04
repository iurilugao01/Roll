function roll(X) {
  const rollN = Math.floor(Math.random() * X) + 1;
  const result = document.querySelector("#result");
  result.value = rollN;
}

document.querySelectorAll(".dd").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const typeDd = btn.getAttribute("data-dd");
    roll(parseFloat(typeDd));
  });
});
