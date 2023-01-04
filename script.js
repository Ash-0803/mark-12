const angleInputs = document.querySelectorAll('.angle-input');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

function isTriangle(){
  let sum = 0;
  angleInputs.forEach((item)=>{
    sum+=Number(item.value)
  })
  if (sum===180){
    output.innerText = "yAy! You have a triangle"
  }
  else { output.innerText = "Sorry, but you have to try again"}
}

btn.addEventListener('click',isTriangle);
