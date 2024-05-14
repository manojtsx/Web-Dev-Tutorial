const defaultBtn = document.querySelector('#default-btn');
const customBtn = document.querySelector('#custom-btn');
const img = document.querySelector('img');

function defaultBtnActive(){
    defaultBtn.click();
}
customBtn.addEventListener('click',defaultBtnActive);

defaultBtn.addEventListener('change',function(){
    const file = this.files[0];
    if(file){   
        const reader = new FileReader()
        reader.onload = function(){
            const result = reader.result;
            img.src = result;
            img.style.visibility = "visible";
        }
        reader.readAsDataURL(file)
    }
})