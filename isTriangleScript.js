const inputAngles = document.querySelectorAll(".inputAngle");
const output = document.querySelector(".output");
const btnCheck = document.querySelector(".isTriangle");
const btnClear = document.querySelector(".clear");

function calculateSumOfAngles() {
  let sum = 0;
  const a1 = Number(inputAngles[0].value);
  const a2 = Number(inputAngles[1].value);
  const a3 = Number(inputAngles[2].value);
  sum = a1 + a2 + a3;
  if (sum === 180) {
    output.innerText = "Yay!!! these angles can form a triangle 🤩";
  } else {
    output.innerText =
      "These angles cannot form a triangle 😔, try with other angles ";
  }
}

btnCheck.addEventListener("click", calculateSumOfAngles);

btnClear.addEventListener("click", function () {
  sum = 0;
  inputAngles[0].value = "";
  inputAngles[1].value = "";
  inputAngles[2].value = "";
  output.innerText = "";
});
