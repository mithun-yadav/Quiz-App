const quizData = [
  {
    question: "Who is the prime minister of India",
    a: "Ramnath Kovind",
    b: "Narendra Modi",
    c: "Rahul Ghandi",
    d: "Jwaharlal Nehru",
    correctAnswer: "b",
  },
  {
    question: "Who is the president of India",
    a: "Ramnath Kovind",
    b: "Narendra Modi",
    c: "Droupadi Murmu",
    d: "Jwaharlal Nehru",
    correctAnswer: "c",
  },
  {
    question: "Who is the son of Rajiv Ghandi",
    a: "Ramnath Kovind",
    b: "Narendra Modi",
    c: "Rahul Ghandi",
    d: "Jwaharlal Nehru",
    correctAnswer: "c",
  },
  {
    question: "Who is the First prime minister of India",
    a: "Ramnath Kovind",
    b: "Narendra Modi",
    c: "Rahul Ghandi",
    d: "Jwaharlal Nehru",
    correctAnswer: "d",
  },
  {
    question: "Who is the Home minister of India",
    a: "Ramnath Kovind",
    b: "Narendra Modi",
    c: "Amit Saha",
    d: "Jwaharlal Nehru",
    correctAnswer: "c",
  }
];

const answersEls=document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const quiz= document.getElementById("quiz");
const submitFunc=document.getElementById("submit");

var currentQuiz = 0;
var score=0;
submitBtn();
function submitBtn() {
  deSelectAnswer();
  const currentQuizDAta = quizData[currentQuiz];
  // console.log("Clicked");
  questionEl.innerText = currentQuizDAta.question;
  a_text.innerText = currentQuizDAta.a;
  b_text.innerText = currentQuizDAta.b;
  c_text.innerText = currentQuizDAta.c;
  d_text.innerText = currentQuizDAta.d;
}

function getSelected(){
  let answer= undefined;

  answersEls.forEach((answerEl) => {
      if(answerEl.checked){
        return answer= answerEl.id;
      }
      
  });

  return answer;
}
function deSelectAnswer(){
    answersEls.forEach((answerEl) => {
        answerEl.checked=false;
    });   
}

submitFunc.addEventListener("click", () => {
  var answers= getSelected();
  if(answers){
    if(answers===quizData[currentQuiz].correctAnswer){
      score++;
    }
  currentQuiz++;
    if(currentQuiz<quizData.length){
        submitBtn();
      }else{
          quiz.innerHTML=`<h2 class="final-score" style="margin:50px 26%;font-size:25px;">YOUR SCORE IS: ${score}/${quizData.length}</h2>
          <button onClick="location.reload()">Reload</button>`;
      }
  }
  
  
});
