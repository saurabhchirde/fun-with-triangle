const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const output = document.querySelector(".output");
const btnCheck = document.querySelector(".isTriangle");
const btnClear = document.querySelector(".clear");

function calculateSumOfAngles() {
  let sum = 0;
  const a1 = Number(input1.value);
  const a2 = Number(input2.value);
  const a3 = Number(input3.value);
  sum = a1 + a2 + a3;
  console.log("Sum :" + sum);
  if (sum === 180) {
    output.innerText = "Angles form a triangle";
  } else {
    output.innerText =
      "These angles cannot form a triangle, try with other angles";
  }
}
//check-Btn
btnCheck.addEventListener("click", calculateSumOfAngles);

//clear-Btn
btnClear.addEventListener("click", function () {
  sum = 0;
  input1.value = "";
  input2.value = "";
  input3.value = "";
  output.innerText = "";
});
