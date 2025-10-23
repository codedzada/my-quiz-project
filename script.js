const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const optionList = document.querySelector('.option-list');
const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn'); // 🔹 əlavə edildi

let questionCount = 0;
let userScore = 0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
   quizSection.classList.add('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.add('active');

   showQuestions(questionCount);
   questionCounter();
   headerScore();
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter();
    headerScore();
}

nextBtn.onclick = () => {
   questionCount++;
   if(questionCount < questions.length){
       showQuestions(questionCount);
       questionCounter();
       nextBtn.classList.remove('active');
   } else {
       showResultBox();
   }
}

// Massivdən Suallar və Seçimlər əldə Etmək
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');

    // Sual nömrəsi 1., 2., 3. formatında
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    // Variantları göstər
    optionList.innerHTML = ""; // əvvəlki variantları təmizlə

    // Dinamik olaraq variantları əlavə et
    questions[index].options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        const span = document.createElement('span');
        span.textContent = option;
        optionDiv.appendChild(span);
        optionList.appendChild(optionDiv);
    });

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('incorrect');

        // Cavab səhv olarsa, avtomatik düzgün cavab seçilir
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    // istifadəçi seçibsə, bütün variantları deaktiv et
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter() {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${questionCount + 1} of ${questions.length} Questions`; 
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}


function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = Math.round((userScore / questions.length) * 100);
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        progressValue.textContent = `${progressStartValue}%`;

        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

// 🔹 Go To Home butonu
goHomeBtn.onclick = () => {
    resultBox.classList.remove('active');   // nəticə gizlət
    quizSection.classList.remove('active'); // quiz bölməsini bağla
    quizBox.classList.remove('active');     // quiz qutusunu bağla
    main.classList.remove('active');        // blur silinsin

    // Ana səhifəni göstər
    const homeSection = document.querySelector('.home');
    homeSection.classList.add('active');

    // Quiz dəyişənlərini sıfırla
    questionCount = 0;
    userScore = 0;
    headerScore();
    questionCounter();
};
