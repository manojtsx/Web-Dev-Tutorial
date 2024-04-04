const div = document.querySelector('div');
const btn = document.querySelector('button');
const span = document.querySelector('span');

btn.addEventListener('click',()=>{
    if(div.classList.contains('light')){
        div.classList.remove('light');
        div.classList.add('dark');
        span.innerText = "dark_mode";
    }else{
        div.classList.remove('dark');
        div.classList.add('light');
        span.innerText = "light_mode";
    }
}
);

const obj  = {
    "name": 'John',
    "age": 30,
    "isMarried": false
}

// What are the diff