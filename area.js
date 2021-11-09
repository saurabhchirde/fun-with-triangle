const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btnCalculate = document.querySelector(".calculate");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

function area() {
  const b = base.value;
  const h = height.value;
  if (b === "" || h === "" || b === "0" || h === "0") {
    output.innerText = "Base or height cannot be blank or zero 🙄";
  } else {
    output.innerText = "Area of a triangle is : " + (1 / 2) * b * h;
  }
}

btnCalculate.addEventListener("click", area);

btnClear.addEventListener("click", function () {
  base.value = "";
  height.value = "";
  output.innerText = "";
});
