const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");
const increaseBtn = document.querySelector("#increase-btn");
const h2 = document.querySelector("h2");

let num = 0;
h2.innerText = num;
decreaseBtn.addEventListener("click", function () {
  num--;
  if (num < 0) {
    h2.style.color = "red";
  } else if (num > 0) {
    h2.style.color = "green";
  } else {
    h2.style.color = "black";
  }
  h2.innerText = num;
});
increaseBtn.addEventListener("click", function () {
  num++;
  if (num < 0) {
    h2.style.color = "red";
  } else if (num > 0) {
    h2.style.color = "green";
  } else {
    h2.style.color = "black";
  }
  h2.innerText = num;
});
resetBtn.addEventListener("click", function () {
  num = 0;
  h2.style.color = "black";
  h2.innerText = num;
});
