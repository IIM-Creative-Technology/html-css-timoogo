class Question {
    questionTitle;
    correctAnswerIndex;
    constructor(questionTitle, correctAnswerIndex) {
        this.questionTitle = questionTitle;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}
class Player {
    username;
    score;
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }
}
const player = new Player("", 0)
const Poll = [
    new Question ("Les céreales, avant ou après le lait ?", 0),
    new Question ("Dark souls c'est la vie?", 1),
    new Question ("La league des légendes, c'était mieux... ", 2), 
]
const answers = [
    ["avant", "après", "osef"],
    ["non", "oui"],
    ["avant", "après", "ct nul ptdr t ki"],
];
let indexQuestion = 0; // sert a incrémenter les questions
let scoreWrapper  = document.getElementById("score"); //score 
let usernameDisplay =document.getElementById("usernameDisplay");
let usernameAltText ="Profil de " + player.username;
//Variables qui vont être utilisés principalement pour la création de la question

let questionDisplay, questionContainer, generalContainer;
//variables relatives aux boutons 
let answerBtn, answerBtnParent
let btnToRemove; 
//Variables qui vont être utilisées pour la suppression de la question
let questionToRemove, questionToRemoveParent;
