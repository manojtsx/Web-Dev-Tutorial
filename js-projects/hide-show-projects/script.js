const input = document.querySelector("input");
const i = document.querySelector("i");

i.addEventListener("click", function () {
  let type = input.type;
  if (type === "password") {
    input.type = "text";
    i.classList.remove("fa-eye-slash");
    i.classList.add("fa-eye");
  } else {
    input.type = "password";
    i.classList.remove("fa-eye");
    i.classList.add("fa-eye-slash");
  }
});
