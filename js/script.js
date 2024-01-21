const techStackIcons = document.querySelectorAll(".tech-stack-list img");
const textElement = document.querySelector(".header-info span");
const text =
  "Jakob Green. An aspiring Front End Web Developer from Virginia Beach, Virginia!";
let index = 0;
const quoteElement = document.getElementById("random-quote");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

techStackIcons.forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    const title = this.title;
    console.log(title);
  });
});

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  } else {
    displayRandomQuote(); // Display a random quote after typing
  }
}

function displayRandomQuote() {
  const quotes = [
    "“Code is like humor. When you have to explain it, it’s bad.” - Cory House",
    "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” - Martin Fowler",
    "“The best error message is the one that never shows up.” - Thomas Fuchs",
    "“It's not all important to get it right the first time. It's vitally important to get it right the last time.” - Andrew Hunt and David Thomas",
    "“Programming isn't about what you know; it's about what you can figure out” - Chris Pine",
    "“The purpose of software engineering is to control complexity, not to create it” - Dr. Pamela Zave",
    "“The art of programming is the skill of controlling complexity” - Marijn Haverbeke",
    "“The sooner you start to code, the longer the program will take.” - Roy Carlson",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
}

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', function () {
    navbar.style.display = navbar.style.display === 'flex' ? '' : 'flex';
  });
});

typeWriter();
