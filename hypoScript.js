const length1 = document.querySelector("#length1");
const length2 = document.querySelector("#length2");
const btnCalculate = document.querySelector(".calculate");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

function hypotenuse() {
  const l1 = Number(length1.value);
  const l2 = Number(length2.value);
  if (l1 === "" || l1 === 0 || l2 === "" || l2 === 0) {
    output.innerText = "Enter valid lengths 😩";
  } else if (l1 < 0 || l2 < 0) {
    output.innerText =
      "Length cannot be negative 🙄, enter some positive values ";
  } else {
    output.innerText =
      "Hypotenuse of a triangle is : " + Math.sqrt(l1 * l1 + l2 * l2);
  }
}

btnCalculate.addEventListener("click", hypotenuse);

btnClear.addEventListener("click", () => {
  length1.value = "";
  length2.value = "";
  output.innerText = "";
});
