/* Create two variable named as num1 and num2. And create another variables called 'op' which takes values such as '+,-,*,/'.
Write a switch case statement where if the case is + , then add two numbers, if the case is - , then subtract, similar for other. and by default print "Invalid character" to the console */
let num1 = 3,
  num2 = 5,
  op = "+";
switch (op) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid Character");
    break;
}
