function roll(X) {
  const rollN = Math.floor(math.random() * X);
  if (rollN === 0) {
    rollN = 1;
  }
  return rollN;
}

document.querySelector(".dd").addEventListener("click", roll(X));
