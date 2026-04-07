const currentPage = window.location.pathname;

if (currentPage.includes("index.html") || currentPage.endsWith("/")) {
    const homeLink = document.getElementById("homeLink");
    if (homeLink) {
        homeLink.classList.add("active");
    }
}

if (currentPage.includes("page2.html")) {
    const carpathiaLink = document.getElementById("carpathiaLink");
    if (carpathiaLink) {
        carpathiaLink.classList.add("active");
    }
}

if (currentPage.includes("page3.html")) {
    const mediaLink = document.getElementById("mediaLink");
    if (mediaLink) {
        mediaLink.classList.add("active");
    }
}

function setTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark", "theme-ocean");

    if (theme === "light") {
        document.body.classList.add("theme-light");
    } else if (theme === "dark") {
        // dark is the default; no extra class needed
    } else if (theme === "ocean") {
        document.body.classList.add("theme-ocean");
    }

    try {
        localStorage.setItem("infodump-theme", theme);
    } catch (e) {
        // localStorage may be unavailable; silently ignore
    }
}

(function restoreTheme() {
    try {
        const saved = localStorage.getItem("infodump-theme");
        if (saved) setTheme(saved);
    } catch (e) {
        // Ignore
    }
})();

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("distanceTable");
    if (table) {
        table.querySelectorAll("tbody tr").forEach(function (row) {
            row.addEventListener("mouseover", function () {
                this.style.backgroundColor = "var(--table-hover)";
            });
            row.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
            });
        });
    }
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
    if (!quizContainer) return;

    quizData.forEach(function (q, index) {
        let questionHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach(function (option) {
            const inputId = `q${index}_${option.replace(/\s+/g, '_')}`;
            questionHTML += `
                <label for="${inputId}">
                    <input type="radio" id="${inputId}" name="q${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        quizContainer.innerHTML += questionHTML;
    });
}

window.addEventListener("load", loadQuiz);

function submitQuiz() {
    let score = 0;

    quizData.forEach(function (q, index) {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    let resultText = "";

    if (score === 10) {
        resultText = "Perfect score! You are a Titanic expert 🚢";
    } else if (score >= 7) {
        resultText = "Great job! You know a lot!";
    } else if (score >= 4) {
        resultText = "Not bad, but you can improve.";
    } else {
        resultText = "Keep studying the Titanic!";
    }

    const resultEl = document.getElementById("result");
    if (resultEl) {
        resultEl.innerText = `You scored ${score}/10. ${resultText}`;
    }
}
