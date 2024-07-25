const button = document.getElementsByTagName('button')[0];
const num = document.getElementsByTagName('h2')[0];

button.addEventListener('click',()=>{
    const ranNum = Math.floor(Math.random() * 100);
    num.innerText = ranNum;
})