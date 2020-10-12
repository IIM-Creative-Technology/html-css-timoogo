function CreateUsername() {

}

function CreateQuestion() {
  let questionDisplay = document.createElement("div"); // h2
  let questionContainer = document.getElementById("isActive"); //
  let generalContainer = document.getElementById("isActive").parentNode;


  questionDisplay.textContent = Poll[indexQuestion].questionTitle;
  questionDisplay.setAttribute("id", "question");
  generalContainer.insertBefore(questionDisplay, questionContainer) // géneral -> question > parent
}
function RemoveQuestion() {
  let questionToRemove = document.getElementById("question");
  let questionToRemoveParent = document.getElementById("question").parentNode;

  for (let j = 0; j < answers[indexQuestion].length; j++) {
    let btnToRemove = document.getElementById(j);
    btnToRemove.remove();
  }
  questionToRemoveParent.removeChild(questionToRemove);
}
function AnwserManager() {
  CreateQuestion();
  for (let j = 0; j < answers[indexQuestion].length; j++) {
    let answerBtn = document.createElement('button');
    answerBtn.setAttribute("class", "answer");
    answerBtn.setAttribute("id", j);

    let answerBtnParent = document.getElementsByClassName("answersContainer")[0];
    answerBtn.textContent = answers[indexQuestion][j];
    answerBtnParent.appendChild(answerBtn);
    answerBtn.addEventListener('click', HappenOnClick); 
  }
}
function Score(){
  player.score += (Math.floor(100 / Poll.length));
  scoreWrapper.textContent = player.score;
  if(player.score > 66)
    if (player.score = 100) 
      scoreWrapper.innerHTML = 100;
  }

function HappenOnClick() {
  if (this.id == Poll[indexQuestion].correctAnswerIndex) 
    Score();
  
  RemoveQuestion();
  indexQuestion++;
  if (indexQuestion == Poll.length) 
    return;

  AnwserManager();
  
}