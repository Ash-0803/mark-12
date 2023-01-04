sides = document.querySelectorAll('.sides');
btn = document.querySelector('#btn');
output = document.querySelector('#output')
// sides[0].value
btn.addEventListener('click',()=>{
  sumOfSquares = 0
  sides.forEach(item=>{
    sumOfSquares += item.value*item.value
  })
  hypotenuse = Math.sqrt(sumOfSquares)
  output.innerText = "Your hypotenuse is = |"+hypotenuse+"|"
  
})
