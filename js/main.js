let questions=[
    {
        id:1,
        question:"1.WHEN BEING OVERTAKEN:  \n one must  \n A. You must keep as far left as possible \n B. Do not accelerate. \n C. On a multi-lane road, you must move to the left-hand lane when the driver behind you indicates his intention of passing you ",
        answer : "C. Do not accelerate.",


    },
    {
        id:2,
        question:"2.WHEN BEING WHEN OVERTAKING STATIONARY VEHICLES, ESPECIALLY BUSES: ",
        answer :" Slow down",


    },
    {
        id:3,
        question:"3.how to stop car",
        answer :" break",


    }

]
let currentQuestion = 0;
let currentAnswer = 0;
let ElQuetion =document.getElementById("question");
let ElAnswer = document.getElementById("answer");
let ElBtnNext =document.getElementById("btn-next");
let ElAnswerField =document.getElementById("answerField");
let ElbtnAnswer = document.getElementById("btn-answer");

ElBtnNext.addEventListener('click',getNext);
ElbtnAnswer.addEventListener('click',getAnswer);

ElQuetion.innerText = questions[currentQuestion].question;
// ElAnswerField.innerHTML = questions[currentAnswer].answer;
function getNext(){
    ElAnswerField.innerHTML="";
    currentQuestion ++;
    if(currentQuestion == 3){  currentQuestion=0};
    ElQuetion.innerText = questions[currentQuestion].question;

}

function getAnswer(){
    currentAnswer = currentAnswer + 1;
    if(currentAnswer == 3 ){
        currentAnswer =0;
    }
    ElAnswerField.innerHTML = questions[currentAnswer].answer;
    ElAnswerField.innerText = questions[currentQuestion].answer;
}
