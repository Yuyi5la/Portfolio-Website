// Animation effect
const words = ["Web Developer", "Machine Learning Engineer","Data Engineer", "Freelancer"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[currentWordIndex];
    const displayedText = currentWord.substring(0, currentCharIndex);
    typingText.textContent = displayedText;

    if (!isDeleting && currentCharIndex < currentWord.length) {
        currentCharIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});




//Show/hide the menu or navbar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});



  // Collapse navbar after clicking a link (Bootstrap behavior)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

const toggler = document.querySelector('.custom-toggle');
  const nav = document.getElementById('navbarNav');

  toggler.addEventListener('click', () => {
    toggler.classList.toggle('open');
  });

  // Optional: remove 'open' when a nav link is clicked (for mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggler.classList.remove('open');
    });
  });
