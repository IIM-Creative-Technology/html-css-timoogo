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
const player = new Player("", 0);
const Poll = [
    new Question("Le meilleur champion de LoL", 0),
    new Question("Dark souls c'est la vie?", 0),
    new Question("La league des légendes, c'était mieux durant... ", 4),
]
const answers = [
    ["Le mien", "y'en a pas, je suis la meta"],
    ["Oui", "Non"],
    ["2009-2013, maitre yi ap", "7.18, ardent censer meta", "Ca n'a jamais été bien en fait", 'actuellemnt'],
];

let indexQuestion = 0; // sert a incrémenter les questions
let scoreWrapper = document.getElementById("score"); //score 
let usernameDisplay = document.getElementById("usernameDisplay");
let usernameAltText = "Profil de " + player.username;
//Variables qui vont être utilisés principalement pour la création de la question

let questionDisplay, questionContainer, generalContainer;
//variables relatives aux boutons 
let answerBtn, answerBtnParent
let btnToRemove;
//Variables qui vont être utilisées pour la suppression de la question
let questionToRemove, questionToRemoveParent;


//variables pour écran de fin
// A améliorer pour plus tard (manque de temps pour le faire fonctionner correctement, il affichait uniquement le contenu case: 100)
const finalText = [
    'Tu as eu zero bonnes réponses...',
    'Tu as eu 1 bonne réponse',
    'Tu as eu 2 bonnes réponses',
    'Tu as eu 3 bonnes réponses'
];



let finalScoreDisplay = document.createElement("div");
let finalScoreParent = document.getElementsByClassName("container")[0];
