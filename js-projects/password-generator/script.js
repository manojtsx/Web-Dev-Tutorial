const button  = document.querySelector('button');
const p = document.querySelector('p');

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%!@#$^&*(){}[]~-=+"
button.addEventListener('click',()=>{
    let password = "";
    for(let i = 0; i < 8; i++){
        password+=chars[Math.floor(Math.random() * chars.length)]  
    }
    p.innerText = password;
});

p.addEventListener('click',()=>{
    navigator.clipboard.writeText(p.innerText)
})