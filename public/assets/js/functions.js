function CreateUsername() {
  
  player.username = prompt("ton nom ?");
  if(player.username == null)
    player.username = prompt("ton nom ?");
    
  else{
    confirm("Bienvenue " + player.username + " le sondage va commencer");
    usernameDisplay.innerHTML += player.username;
    usernameDisplay.style.display = 'block';
    usernameAltText ="Profil de " + player.username;
    usernameDisplay.setAttribute("title", usernameAltText);
    AnwserManager();
  }
}
function CreateQuestion() {
  questionDisplay = document.createElement("h3");
  questionContainer = document.getElementById("isActive"); 
  generalContainer = document.getElementById("isActive").parentNode;
  questionDisplay.textContent = Poll[indexQuestion].questionTitle;
  questionDisplay.setAttribute("id", "questionText");
  generalContainer.insertBefore(questionDisplay, questionContainer) // géneral -> question > parent
}
function RemoveQuestion() {
  questionToRemove = document.getElementById("questionText");
  questionToRemoveParent = document.getElementById("questionText").parentNode;

  for (let j = 0; j < answers[indexQuestion].length; j++) {
    btnToRemove = document.getElementById(j);
    btnToRemove.remove();
  }
  questionToRemoveParent.removeChild(questionToRemove);
}
function AnwserManager() {
  CreateQuestion();
  for (let j = 0; j < answers[indexQuestion].length; j++) {
    answerBtn = document.createElement('button');
    answerBtn.setAttribute("class", "answer");
    answerBtn.setAttribute("id", j);
    answerBtnParent = document.getElementsByClassName("answersContainer")[0];
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