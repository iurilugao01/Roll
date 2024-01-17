let typeRoll = "default";
let rollNumber = 1;

document.querySelectorAll(".dd").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const result = document.querySelector("#result");

    if (typeRoll === "default") {
      const typeDd = btn.getAttribute("data-dd");
      result.value = roll(parseFloat(typeDd));

      historic(result.value);
    }

    if (typeRoll === "bestValue") {
      const typeDd = btn.getAttribute("data-dd");
      result.value = rollBestValue(typeDd, rollNumber);
    }

    if (typeRoll === "sum") {
      const typeDd = btn.getAttribute("data-dd");
      result.value = rollSum(typeDd, rollNumber);
    }
  });
});

document.querySelector("#switch").addEventListener("click", function () {
  const radio = document.getElementsByName("dado");
  const radioArray = Array.from(radio);
  const rollValue = parseFloat(document.querySelector("#rollNumber").value);

  radioArray.forEach(function (radio) {
    if (radio.checked) {
      typeRoll = radio.value;
    }
  });

  if (rollValue) {
    rollNumber = rollValue;
  }
});

const roll = (X) => Math.floor(Math.random() * X) + 1;

const rollBestValue = (typeRoll, quantity) => {
  if (quantity <= 0) {
    alert("A quantidade de dados deve ser maior que zero.");
    return;
  }

  const results = Array.from({ length: quantity }, () => roll(typeRoll));
  let bestValue = Math.max(...results);

  historic(results);
  return bestValue;
};

const rollSum = (typeRoll, quantity) => {
  if (quantity <= 0) {
    alert("A quantidade de dados deve ser maior que zero.");
    return;
  }

  const results = Array.from({ length: quantity }, () => roll(typeRoll));
  let sum = results.reduce((acc, number) => acc + number, 0);

  historic(results);
  return sum;
};

const historic = (...values) => {
  const viewHistoric = document.querySelector("#historic");
  const li = document.createElement("li");
  li.innerText = values.join(", ");

  viewHistoric.appendChild(li);
};
