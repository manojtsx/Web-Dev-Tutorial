let input = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];
let button = document.getElementsByTagName("button")[0];

function reverseNum(num) {
  return num.split("").reverse().join("");
}

button.addEventListener("click", function () {
  let num = input.value;
  let isPalindrome = false;
  if (num == reverseNum(num)) {
    isPalindrome = true;
  }

  if (isPalindrome) {
    p.innerText = "It is a palindrome number";
    p.style.color = "green";
  } else {
    p.innerText = "It is not a palindrome number";
    p.style.color = "red";
  }
});
