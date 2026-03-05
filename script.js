const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = slides.length - 1;
    }
    showSlide(current);
});
setInterval(() => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
}, 3000);
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
const titles = [
  "Full-Stack Java Developer",
  "Java Trainee",
  "Problem Solver",
  "Backend-Focused Engineer"
];

const typingElement = document.getElementById("typing");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  
  if (!isDeleting) {
    typingElement.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentTitle.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect()

const gmailLink = document.getElementById("gmailLink");
const toast = document.getElementById("toast");

const email = "ramduttnickeel@gmail.com";

gmailLink.addEventListener("click", function(event) {

    event.preventDefault();

    let text = "Gmail";
    let deleteIndex = text.length;

    function deleteText() {

        if (deleteIndex > 0) {

            gmailLink.textContent = text.substring(0, deleteIndex - 1);
            deleteIndex--;

            setTimeout(deleteText, 120);

        } else {

            typeEmail();

        }

    }

    let typeIndex = 0;

    function typeEmail() {

        if (typeIndex < email.length) {

            gmailLink.textContent += email[typeIndex];
            typeIndex++;

            setTimeout(typeEmail, 80);

        } else {

            navigator.clipboard.writeText(email);

            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);

        }

    }

    deleteText();

});

// Scroll progress bar
window.onscroll = function () {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
    const hireBtn = document.querySelector('.hire-btn');
    const hireModal = document.getElementById('hireModal');
    const closeModal = hireModal.querySelector('.close');

    hireBtn.addEventListener('click', () => {
        hireModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        hireModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === hireModal) {
            hireModal.style.display = 'none';
        }
    });

    const hireForm = document.getElementById('hireForm');
    hireForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! I will get back to you soon.');
        hireForm.reset();
        hireModal.style.display = 'none';
    });
});