const inputAngles = document.querySelectorAll(".inputAngle");
const output = document.querySelector(".output");
const btnCheck = document.querySelector(".isTriangle");
const btnClear = document.querySelector(".clear");

const calculateSumOfAngles = () => {
  let sum = 0;
  const a1 = Number(inputAngles[0].value);
  const a2 = Number(inputAngles[1].value);
  const a3 = Number(inputAngles[2].value);

  sum = a1 + a2 + a3;

  if (a1 === "" || a1 === 0 || a2 === "" || a2 === 0 || a3 === "" || a3 === 0) {
    output.innerText =
      "Angles cannot be blank or zero 🙄, try with some inputs ";
  } else if (a1 < 0 || a2 < 0 || a3 < 0) {
    output.innerText =
      "Angles cannot be negative 🙄, try with some positive angles ";
  } else if (sum === 180) {
    output.innerText = "Yay!!! these angles can form a triangle 🤩";
  } else {
    output.innerText =
      "These angles cannot form a triangle 😔, try with other angles ";
  }
};

btnCheck.addEventListener("click", calculateSumOfAngles);

btnClear.addEventListener("click", () => {
  sum = 0;
  inputAngles[0].value = "";
  inputAngles[1].value = "";
  inputAngles[2].value = "";
  output.innerText = "";
});
