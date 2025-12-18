const questions = [
    // 1
    {
        question: "Banyaknya himpunan kuasa P({1, 2, 3}) adalah ...",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "3", correct: false },
            { text: "9", correct: false }
        ]
    },

    // 2
    {
        question: "Dalam sebuah kelas, 20 murid mengikuti les Bahasa inggris, 70 murid mengikuti les matematika, 8 murid mengikuti kedua-duanya dan 15 murid tidak mengikuti les apapun. Berapakah jumlah murid tersebut?",
        answers: [
            { text: "97", correct: true },
            { text: "107", correct: false },
            { text: "117", correct: false },
            { text: "127", correct: false }
        ]
    },

    // 3
    {
        question: "Himpunan kosong dilambangkan dengan ...",
        answers: [
            { text: "{ } atau Ø", correct: true },
            { text: "0", correct: false },
            { text: "{0}", correct: false },
            { text: "Ø₁", correct: false }
        ]
    },

    // 4
    {
        question: "Jika n(A)=20 dan n(B)=30 dan n(AUB) = 40 maka n(A ∩ B) adalah?.",
        answers: [
            { text: "20", correct: false },
            { text: "30", correct: false },
            { text: "40", correct: false },
            { text: "10", correct: true }
        ]
    },

    // 5
    {
        question: "Himpunan bagian dari C = {a, b, c} yang benar adalah ...",
        answers: [
            { text: "{a, d}", correct: false },
            { text: "{a, b}", correct: true },
            { text: "{b, c, d}", correct: false },
            { text: "{a, b, c, d}", correct: false }
        ]
    },

    // 6
    {
        question: "A dan B dikatakan saling lepas jika ...",
        answers: [
            { text: "A = B", correct: false },
            { text: "A ⊄ B", correct: false },
            { text: "A ∩ B = Ø", correct: true },
            { text: "A ∪ B = A", correct: false }
        ]
    },

    // 7
    {
        question: "Contoh himpunan yang saling lepas adalah ...",
        answers: [
            { text: "{1, 2} dan {2, 3}", correct: false },
            { text: "{a, b} dan {c, d}", correct: true },
            { text: "{3, 4} dan {4, 5}", correct: false },
            { text: "{1, 2} dan {1}", correct: false }
        ]
    },

    // 8
    {
        question: "Himpunan kuasa dari {x} adalah ...",
        answers: [
            { text: "{x}", correct: false },
            { text: "{Ø, x}", correct: false },
            { text: "{Ø, {x}}", correct: true },
            { text: "{x, {x}}", correct: false }
        ]
    },

    // 9
    {
        question: "Diagram Venn digunakan untuk ...",
        answers: [
            { text: "Mengurutkan bilangan", correct: false },
            { text: "Menggambarkan hubungan antar himpunan", correct: true },
            { text: "Menentukan persamaan bilangan", correct: false },
            { text: "Menggambar grafik fungsi", correct: false }
        ]
    },

    // 10
    {
        question: "Himpunan bagian dari Ø adalah ...",
        answers: [
            { text: "{Ø}", correct: false },
            { text: "Ø saja", correct: true },
            { text: "Tidak ada", correct: false },
            { text: "{Ø, {Ø}}", correct: false }
        ]
    },

    // 11
    {
        question: "Jika A = {1, 2, 3} maka salah satu anggota P(A) adalah ...",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "{1, 2}", correct: true },
            { text: "{4}", correct: false }
        ]
    },

    // 12
    {
        question: "Jika A = {1, 2} dan B = {3, 4}, maka A ∩ B adalah ...",
        answers: [
            { text: "{1, 3}", correct: false },
            { text: "{2}", correct: false },
            { text: "{3, 4}", correct: false },
            { text: "Ø", correct: true }
        ]
    },

    // 13
    {
        question: "Banyaknya himpunan bagian dari himpunan beranggota 4 adalah ...",
        answers: [
            { text: "4", correct: false },
            { text: "8", correct: false },
            { text: "16", correct: true },
            { text: "2", correct: false }
        ]
    },

    // 14
    {
        question: "Himpunan kosong memiliki banyak anggota ...",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "0", correct: true },
            { text: "Tergantung konteks", correct: false }
        ]
    },

    // 15
    {
        question: "Himpunan bagian yang bukan dari {2, 4, 6} adalah ...",
        answers: [
            { text: "{2, 4}", correct: false },
            { text: "Ø", correct: false },
            { text: "{6}", correct: false },
            { text: "{2, 3}", correct: true }
        ]
    },

    // 16
    {
        question: "Dua himpunan tidak saling lepas jika ...",
        answers: [
            { text: "A ∩ B ≠ Ø", correct: true },
            { text: "A ∪ B = Ø", correct: false },
            { text: "Salah satunya kosong", correct: false },
            { text: "Anggotanya sama", correct: false }
        ]
    },

    // 17
    {
        question: "Jika A = {a, b} maka P(A) memiliki banyak anggota ...",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false }
        ]
    },

    // 18
    {
        question: "Jika dua lingkaran pada diagram Venn saling tumpang tindih, artinya ...",
        answers: [
            { text: "A dan B saling lepas", correct: false },
            { text: "A ∩ B ≠ Ø", correct: true },
            { text: "A = B", correct: false },
            { text: "A kosong", correct: false }
        ]
    },

    // 19
    {
        question: "Himpunan {1, 2, 3} memiliki himpunan bagian berjumlah ...",
        answers: [
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "8", correct: true },
            { text: "3", correct: false }
        ]
    },

    // 20
    {
        question: "A = {x | x bilangan prima kurang dari 10}. Maka A adalah ...",
        answers: [
            { text: "{2, 3, 5, 7}", correct: true },
            { text: "{3, 5, 7, 11}", correct: false },
            { text: "{1, 2, 3}", correct: false },
            { text: "{2, 4, 6}", correct: false }
        ]
    }
];


// ==========================
// QUIZ LOGIC (TIDAK DIUBAH)
// ==========================

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option");

        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.style.background = "green";
        score++;
    } else {
        selectedBtn.style.background = "red";
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.background = "green";
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `Kuis selesai! Skor kamu: ${score} dari ${questions.length}`;
    nextButton.innerHTML = "Main Lagi";
    nextButton.style.display = "block";

    nextButton.onclick = startQuiz;
}

startQuiz();
