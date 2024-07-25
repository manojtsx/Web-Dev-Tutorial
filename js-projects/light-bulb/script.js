const powerBtn = document.getElementsByClassName('fa-power-off')[0];
const bulb = document.getElementsByClassName('fa-lightbulb')[0];

let isOff = true;
powerBtn.addEventListener("click",()=>{
  isOff = !isOff;
  if(isOff){
    bulb.style.color = 'grey'
  }else{
    bulb.style.color = 'white'
  }
})