import { nodeQuestions } from './public/data/node.js';
import { javascriptQuestions } from './public/data/javascript.js';
import { mongoDbQuestions } from './public/data/mongoDB.js'

const faqList = document.getElementById("faqList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const tabButtons = document.querySelectorAll(".tab-btn");

const questions = {
    node: nodeQuestions,
    javascript: javascriptQuestions,
    mongoDb: mongoDbQuestions
};

let currentTopic = "node";

function renderFAQ(topic, filter = "") {
    faqList.innerHTML = "";
    const filtered = questions[topic].filter(q =>
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

    setupToggle();
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

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Show button
    } else {
        backToTopBtn.style.display = "none"; // Hide button
    }
};

// Scroll to the top of the page when the button is clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
