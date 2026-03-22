const currentPage = window.location.pathname;

if (currentPage.includes("page1.html")) {
    document.getElementById("homeLink").style.fontWeight = "bold";
    document.getElementById("homeLink").style.color = "#FF69B4"
} else {
    document.getElementById("homeLink").style.color = "#CCFF00"
}
if (currentPage.includes("page2.html")) {
    document.getElementById("carpathiaLink").style.fontWeight = "bold";
    document.getElementById("carpathiaLink").style.color = "#FF69B4"
} else {
    document.getElementById("carpathiaLink").style.color = "#CCFF00"
}
if (currentPage.includes("page3.html")) {
    document.getElementById("mediaLink").style.fontWeight = "bold";
    document.getElementById("mediaLink").style.color = "#FF69B4";
} else {
    document.getElementById("mediaLink").style.color = "#CCFF00"
}

function setTheme(theme) {
    if (theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } 
    else if (theme === "dark") {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";
    } 
    else if (theme === "ocean") {
        document.body.style.backgroundColor = "#0e3d59";
        document.body.style.color = "#f1f2f6";
    }
}

document.querySelectorAll("#distanceTable tr").forEach(row => {
    row.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#90ee90";
    });

    row.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    });
});

const quizData = [
    {
        question: "What year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1898"],
        answer: "1912"
    },
    {
        question: "What ship rescued Titanic survivors?",
        options: ["SS Californian", "RMS Olympic", "RMS Carpathia", "Britannic"],
        answer: "RMS Carpathia"
    },
    {
        question: "How many people were rescued by Carpathia?",
        options: ["300", "705", "1200", "50"],
        answer: "705"
    },
    {
        question: "Who was the captain of Carpathia?",
        options: ["Edward Smith", "Arthur Rostron", "James Cameron", "Harold Bride"],
        answer: "Arthur Rostron"
    },
    {
        question: "How far away was Carpathia from Titanic?",
        options: ["10 miles", "25 miles", "58 miles", "100 miles"],
        answer: "58 miles"
    },
    {
        question: "What signal did Titanic send?",
        options: ["SOS/CQD", "HELP", "RADIO", "911"],
        answer: "SOS/CQD"
    },
    {
        question: "What caused Titanic to sink?",
        options: ["Fire", "Iceberg", "Storm", "Explosion"],
        answer: "Iceberg"
    },
    {
        question: "What ocean did Titanic sink in?",
        options: ["Pacific", "Indian", "Atlantic", "Arctic"],
        answer: "Atlantic"
    },
    {
        question: "What was Carpathia mainly used for before the rescue?",
        options: ["Warship", "Luxury cruises", "Passenger service", "Fishing"],
        answer: "Passenger service"
    },
    {
        question: "What eventually sank the Carpathia?",
        options: ["Iceberg", "Storm", "Submarine torpedo", "Fire"],
        answer: "Submarine torpedo"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");

    quizData.forEach((q, index) => {
        let questionHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach(option => {
            questionHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        quizContainer.innerHTML += questionHTML;
    });
}

window.onload = loadQuiz;

function submitQuiz() {
    let score = 0;

    quizData.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    let resultText = "";

    // 🔥 CONDITIONAL LOGIC
    if (score === 10) {
        resultText = "Perfect score! You are a Titanic expert 🚢";
    } else if (score >= 7) {
        resultText = "Great job! You know a lot!";
    } else if (score >= 4) {
        resultText = "Not bad, but you can improve.";
    } else {
        resultText = "Keep studying the Titanic!";
    }

    document.getElementById("result").innerText =
        `You scored ${score}/10. ${resultText}`;
}