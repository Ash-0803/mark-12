const quizForm = document.querySelector('#quizo');
const btn = document.querySelector('#submit');
const output = document.querySelector('#output');

const correctAns = ["90°","right angled"]

btn.addEventListener('click',calculate);

function calculate(){
  results = new FormData(quizForm);
  score = 0;
  index = 0;
  results = results.values();
  for(let value of results){
    if(value == correctAns[index]){
      score+=1;
    }
    console.log(value,results,correctAns[index])
    index+=1;
    output.innerText = "Your Score is : "+score;
  }
}
