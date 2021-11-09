const quizForm = document.querySelector(".quizForm");
const btnSubmit = document.querySelector(".submit");
const output = document.querySelector(".output");

const correctAns = ["90°", "right angled"];

function checkAns() {
  const formData = new FormData(quizForm);
  let i = 0,
    score = 0;
  for (let value of formData.values()) {
    if (value === correctAns[i]) {
      score++;
    }
    i++;
    output.innerText = "Your score is : " + score;
  }
}

btnSubmit.addEventListener("click", checkAns);
