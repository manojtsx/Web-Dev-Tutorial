const button = document.querySelector('button');
const p = document.querySelector('p');

// Add event listener to button - Anonymous function
button.addEventListener('click',function(){
    if(p.style.display === 'none'){
        p.style.display = 'block';
        button.innerText = 'Hide';
    }else{
        p.style.display = 'none';
        button.innerText = 'Show';
    }
})
