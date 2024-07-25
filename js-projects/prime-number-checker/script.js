let input = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  let num = input.value;
  let isPrime = true;
  if (num === "2") {
    isPrime = false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    p.innerText = "It is a prime number";
    p.style.color = "green";
  } else {
    p.innerText = "It is not a prime number";
    p.style.color = "red";
  }
});
