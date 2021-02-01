function CreateUsername() {
  if (player.username == " " || player.username == "" || player.username == null)
    player.username = prompt("Quel est ton nom ?");
  while (player.username == " " || player.username == "" || player.username == null)
    player.username = prompt("Encore, Quel est ton nom ?");

  if (player.username != null) {
    console.log("init");
    Init();
  } else {
    player.username = prompt("Quel est ton nom ?");
  }

}

function Init() {
  confirm("Bienvenue " + player.username + " le sondage va commencer");
  usernameDisplay.innerHTML += player.username;
  scoreWrapper.style.display = 'block';
  usernameDisplay.style.display = 'block';
  usernameAltText = "Profil de " + player.username;
  usernameDisplay.setAttribute("title", usernameAltText);
  AnwserManager();
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
function EndGame() {
  let finalTextDisplay = document.createElement("div");
  finalTextDisplay.setAttribute("id", 'finalText');

  finalScoreDisplay.setAttribute('id', 'finalScoreDisplay');
  finalScoreDisplay.setAttribute('class', 'score');

  finalTextDisplay.style.display = 'block';
  finalScoreDisplay.style.display = "block";


  switch(player.score){
    case 0:
        finalTextDisplay.innerHTML+= finalText[0];
        break;
    case 33:
        finalTextDisplay.innerHTML+= finalText[1];
        break;
    case 66:
        finalTextDisplay.innerHTML+= finalText[2];
        break;
    case 100:
        finalTextDisplay.innerHTML+= finalText[3];
        break;
      }
  finalScoreParent.appendChild(finalTextDisplay);
  finalScoreParent.appendChild(finalScoreDisplay);
  finalScoreDisplay.innerHTML = player.score;
  finalScoreParent.appendChild()
}
function Score() {

  player.score += (Math.floor(100 / Poll.length));
  scoreWrapper.textContent = player.score;
  if (player.score > 80)
    if (player.score = 100)
      scoreWrapper.innerHTML = 100;
}

function HappenOnClick() {
  if (this.id == Poll[indexQuestion].correctAnswerIndex)
    Score();

  RemoveQuestion();
  indexQuestion++;
  if (indexQuestion == Poll.length) {
    EndGame();
    return;
  }

  //si on a atteint la fin des questions
  AnwserManager(); //lance question suivante 

}
