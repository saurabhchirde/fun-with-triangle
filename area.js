const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btnCalculate = document.querySelector(".calculate");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

const area = () => {
  const b = Number(base.value);
  const h = Number(height.value);
  if (b === "" || h === "" || b === 0 || h === 0) {
    output.innerText = "Base or height cannot be blank or zero 🙄";
  } else if (b < 0 || h < 0) {
    output.innerText =
      "Base or Height cannot be negative 🙄, enter some positive values ";
  } else {
    output.innerText = "Area of a triangle is : " + (1 / 2) * b * h;
  }
};

btnCalculate.addEventListener("click", area);

btnClear.addEventListener("click", () => {
  base.value = "";
  height.value = "";
  output.innerText = "";
});
