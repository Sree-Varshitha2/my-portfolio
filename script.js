// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==============================
// Active Navigation on Scroll
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// Fade-in Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==============================
// Typing Effect
// ==============================

const roles = [

    "AI & ML Student",
    "Web Developer",
    "Python Programmer",
    "Frontend Developer"

];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-text h2");

function typeEffect() {

    if (!typingElement) return;

    typingElement.textContent =
        roles[roleIndex].substring(0, charIndex);

    charIndex++;

    if (charIndex > roles[roleIndex].length) {

        setTimeout(() => {

            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;

        }, 1200);

    }

}

setInterval(typeEffect, 120);


// ==============================
// Hero Image Animation
// ==============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.style.transform = "translateY(-10px)";

        setTimeout(() => {

            heroImage.style.transform = "translateY(0px)";

        }, 800);

    }, 1600);

}


// ==============================
// Console Message
// ==============================

console.log("Welcome to Pasala Sree Varshitha's Portfolio 🚀");