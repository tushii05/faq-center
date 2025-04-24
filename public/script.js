import { nodeQuestions } from './data/node.js';
import { javascriptQuestions } from './data/data.js';
import { mongoDbQuestions } from './data/mongoDB.js';
import { mySQLQuestions } from './data/mySql.js';
import { apiQuestions } from './data/api.js';
import { reactQuestions } from './data/react.js';
import { javaQuestions } from './data/java.js';

const faqList = document.getElementById("faqList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const tabButtons = document.querySelectorAll(".tab-btn");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const questions = {
    node: nodeQuestions,
    javascript: javascriptQuestions,
    mongoDb: mongoDbQuestions,
    mySQL: mySQLQuestions,
    api: apiQuestions,
    react: reactQuestions,
    java: javaQuestions,
};

let currentTopic = "node";

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function renderFAQ(topic, filter = "") {
    faqList.innerHTML = "";

    // Get all questions for the current topic
    const topicQuestions = questions[topic];

    // Check if questions are categorized
    const isCategorized = topicQuestions.easy && topicQuestions.intermediate && topicQuestions.advanced;

    if (isCategorized) {
        // Render categorized questions
        renderCategorizedQuestions(topicQuestions, filter);
    } else {
        // Render uncategorized questions (original behavior)
        renderUncategorizedQuestions(topicQuestions, filter);
    }

    setupToggle();
}

function renderCategorizedQuestions(topicQuestions, filter) {
    // Render Easy questions
    renderQuestionSection("Easy", topicQuestions.easy, filter);

    // Render Intermediate questions
    renderQuestionSection("Intermediate", topicQuestions.intermediate, filter);

    // Render Advanced questions
    renderQuestionSection("Advanced", topicQuestions.advanced, filter);
}

function renderQuestionSection(title, questions, filter) {
    const filtered = questions.filter(q =>
        q.question.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length > 0) {
        const sectionHeader = document.createElement("h2");
        sectionHeader.className = "difficulty-header";
        sectionHeader.textContent = `${title} Questions`;
        faqList.appendChild(sectionHeader);

        filtered.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("question-item");
            li.innerHTML = `
                <button class="question-btn">${item.question}</button>
                <div class="answer-box">
                    <div class="answer-content">${item.answer}</div>
                </div>
            `;
            faqList.appendChild(li);
        });
    }
}

function renderUncategorizedQuestions(questions, filter) {
    const filtered = questions.filter(q =>
        q.question.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        faqList.innerHTML = `<li class="no-results">No questions found.</li>`;
        return;
    }

    filtered.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("question-item");
        li.innerHTML = `
            <button class="question-btn">${item.question}</button>
            <div class="answer-box">
                <div class="answer-content">${item.answer}</div>
            </div>
        `;
        faqList.appendChild(li);
    });
}

function setupToggle() {
    const buttons = document.querySelectorAll(".question-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            const answer = parent.querySelector(".answer-box");

            document.querySelectorAll(".question-item").forEach(item => {
                if (item !== parent) {
                    item.classList.remove("active");
                    item.querySelector(".answer-box").classList.remove("active");
                }
            });

            parent.classList.toggle("active");
            answer.classList.toggle("active");
        });
    });
}

searchInput.addEventListener("input", () => {
    renderFAQ(currentTopic, searchInput.value);
    clearSearch.style.display = searchInput.value ? "inline" : "none";
});

clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.display = "none";
    renderFAQ(currentTopic);
});

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentTopic = btn.dataset.topic;
        searchInput.value = "";
        clearSearch.style.display = "none";
        renderFAQ(currentTopic);
    });
});

renderFAQ(currentTopic);

// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});