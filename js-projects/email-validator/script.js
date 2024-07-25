let input = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];

function validateEmail(email) {
  let isEmail = false;
  let atIndex = email.indexOf("@");
  let dotIndex = email.indexOf(".");
  if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 2) {
    isEmail = true;
  }
  return isEmail;
}
input.addEventListener("input", () => {
  const email = input.value;
  const isEmail = validateEmail(email);
  if (isEmail) {
    p.innerText = "";
  } else {
    p.innerText = "Please enter a valid email";
  }
});
