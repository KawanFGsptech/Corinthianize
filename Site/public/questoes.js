var $startGameButton = document.querySelector(".start-quiz");
var $questionsContainer = document.querySelector(".question-container");
var $answersContainer = document.querySelector(".answers-conteiner");
var $questionText = document.querySelector(".question");
var $nextQuestionButton = document.querySelector(".next-question");

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


var currentQuestionIndex = 0
var totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion()
}


function displayNextQuestion() {
    resetState()

    if (question.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = question[currentQuestionIndex].question
    question[currentQuestionIndex].answers.forEach(answer => {
        var newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    var answerClicked = event.target;

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    if (answerClicked.dataset.correct === "true") {
        totalCorrect++;
    }

    $nextQuestionButton.classList.remove("hide");
    currentQuestionIndex++;
}

function finishGame() {
    var totalQuestions = question.length;
    var performance = Math.floor((totalCorrect / totalQuestions) * 100);

    $questionsContainer.innerHTML = 
    `
      <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Vai Corinthians!!!</span>
      </p>
      <button onclick=window.location.href="./dash.html" class="button">
        Ver resultados
      </button>
    `
  }

var question = [
  {
    question: "Em que ano foi fundado o Corinthians?",
    answers: [
      { text: "1905", correct: false },
      { text: "1910", correct: true },
      { text: "1915", correct: false },
      { text: "1920", correct: false },
    ],
  },
  {
    question: "Qual foi o adversário do Corinthians na final do Mundial de 2012?",
    answers: [
      { text: "Barcelona - ESP", correct: false },
      { text: "Juventus - ITA", correct: false },
      { text: "Bayern - ALE", correct: false },
      { text: "Chelsea - ING", correct: true },
    ],
  },
  {
    question: "Quantos títulos brasileiros tem o Corinthians?",
    answers: [
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "5", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Qual o jogador com maior número de jogos pelo Corinthians?",
    answers: [
      { text: "Cássio", correct: false },
      { text: "Zé Maria", correct: false },
      { text: "Wladimir", correct: true },
      { text: "Cláudio", correct: false },
    ],
  },
  {
      question: "Em que bairro de São Paulo é localizada a Neo Química Arena?",
      answers: [
        { text: "Itaquera", correct: true },
        { text: "Canindé", correct: false },
        { text: "Barra Funda", correct: false },
        { text: "Morumbi", correct: false },
      ],
    },
    {
      question: "Qual o mascote do Corinthians?",
      answers: [
        { text: "Gambá", correct: false },
        { text: "Gavião", correct: false },
        { text: "Zizao", correct: false },
        { text: "Mosqueteiro", correct: true },
      ],
    },
    {
      question: "Quem fez o gol da vitória contra o Vasco na Libertadores de 2012?",
      answers: [
        { text: "Fábio Santos", correct: false },
        { text: "Paulinho", correct: true },
        { text: "Emerson Sheik", correct: false },
        { text: "Jorge Henrique", correct: false },
      ],
    },
    {
      question: "Como se inicia o hino do Corinthians?",
      answers: [
        { text: "Salve o Corinthians...", correct: true },
        { text: "Até a pé nos iremos...", correct: false },
        { text: "Eu teria um desgosto profundo...", correct: false },
        { text: "Corinthians, Corinthians, goool...", correct: false },
      ],
    },
    {
      question: "Qual time inspirou a criação do Corinthians?",
      answers: [
        { text: "Fluminense", correct: false },
        { text: "Manchester United", correct: false },
        { text: "Corinthian FC", correct: true },
        { text: "Criciúma", correct: false },
      ],
    },
    {
      question: "Qual estrangeiro mais vestiu a camisa do Corinthians?",
      answers: [
        { text: "Balbuena", correct: false },
        { text: "Rincón", correct: false },
        { text: "Guerrero", correct: false },
        { text: "Romero", correct: true },
      ],
    },
    ];

function cadastrarNota() {

  fetch("/resultado/cadastrarNota", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        NotaServer: totalCorrect,
    }),
})
    .then(function (resposta) {
        console.log("resposta: ", resposta);
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}