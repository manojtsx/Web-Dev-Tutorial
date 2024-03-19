// 2. Can you create a JavaScript program that utilizes a for loop to traverse a string and count the occurrences of the letter 'a'? Include a conditional statement within the loop to only count occurrences when the letter is lowercase. 
let str = "Welcome to JavaScript"; 
let len = str.length; // Find the length of the string
let count = 0;
for(let i = 0 ; i <= len; i = i +1){
    if(str[i] === "a"){
        count = count + 1;
    }
}
console.log("Repeated number : " ,count);


// console.log(1==="1");