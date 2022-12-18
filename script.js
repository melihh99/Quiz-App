const quizData = [
    {
        question: 'What century are we in? ' ,
        a: '19.',
        b: '20.',
        c: '21.',
        d: '22.',

        correct: 'c'

    } ,
    {
        question: 'What is the most used programming language in 2022?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',

        correct: 'd'

    },
    {
        question: 'Which is not a front-end programming language?',
        a: 'HTML',
        b: 'Java',
        c: 'JavaScript',
        d: 'CSS',

        correct: 'b'
    },
    {
        question: 'What year was javascript invented?',
        a: '1995',
        b: '1996',
        c: '1997',
        d: '1998', 

        correct: 'a'
    },
    {
        question: 'Who Invented JavaScript?', 
        a: 'Brendan Eich',
        b: 'Thomas Java',
        c: 'James Gosling',
        d: 'Linus Helsinki',

        correct: 'a'

    }

]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData [currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
        
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answerEl.checked = false;
        }
        
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData [currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()"> Reload </button>`;
        } 
    }
});