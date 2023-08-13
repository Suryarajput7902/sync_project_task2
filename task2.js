const Questions = [ {
        question: "1. Which one of the following is the largest glacier of India?",
        answers: [{ option: " Pindari", isCorrect: false },
        { option: "Siachen", isCorrect: true },
        { option: "Zemu", isCorrect: false },
        { option: "Gangotri", isCorrect: false }
        ]
     
},
{
    question: "     2.  What is capital of India?        ",
    answers: [{ option: "Gandhinagar", isCorrect: false },
    { option: "Surat", isCorrect: false },
    { option: "Delhi", isCorrect: true },
    { option: "Mumbai", isCorrect: false }
    ]
 
},
{
    question: "     3. Loktak lake is located in the State of       ",
    answers: [{ option: "surat", isCorrect: false },
    { option: "Manipur", isCorrect: true  },
    { option: "Jammu", isCorrect: false },
    { option: "Mumbai", isCorrect: false }
    ]
 
},
{
    question: "     4.Highest peak of peninsular India is   ",
    answers: [{ option: "Mahindragiri", isCorrect: false },
    { option: "Mahabaleshwar", isCorrect: false  },
    { option: "Kalasubai", isCorrect: false },
    { option: "Anaimudi", isCorrect: true }
    ]
 
},
{
    question: "     5.Which one of the folowing dams is on the Beas    ",
    answers: [{ option: "Pong", isCorrect: true },
    { option: "Tilaiya", isCorrect: false  },
    { option: "Bhakra", isCorrect: false },
    { option: "Rihand", isCorrect: false}
    ]
 
},
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].question;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].answers.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].answers[i].option;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].answers[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}