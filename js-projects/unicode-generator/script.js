let input = document.getElementsByTagName("input")[0];
let p = document.getElementsByTagName("p")[0];
let button = document.getElementsByTagName("button")[0];


button.addEventListener("click", function () {
  let char = input.value;
  let uniCode = char.charCodeAt(0);
  p.innerText = `The code of ${char} is ${uniCode}`;
}); 
