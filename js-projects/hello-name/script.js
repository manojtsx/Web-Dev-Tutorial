const button = document.getElementsByTagName("button")[0];
const span = document.getElementsByTagName("span")[0];

button.addEventListener("click", () => {
  const name = window.prompt("Enter a name");
  span.innerText = name;
});
