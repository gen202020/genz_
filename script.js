/* ==========================================
   GENZEROO PORTFOLIO
   script.js
========================================== */

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ==========================================
   Animated Statistics Counter
========================================== */

const counters = document.querySelectorAll("[data-number]");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.number);

        let current = 0;
        const speed = Math.max(20, target / 80);

        const update = () => {

            current += speed;

            if(current >= target){

                counter.textContent = target >= 1000
                    ? (target / 1000).toFixed(1) + "K"
                    : target;

                return;
            }

            counter.textContent = Math.floor(current);

            requestAnimationFrame(update);

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => counterObserver.observe(counter));

/* ==========================================
   Fade-in Animation
========================================== */

const revealElements = document.querySelectorAll(
    ".glass, .title, .skill, .timeline"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/* ==========================================
   Shooting Stars
========================================== */

function createStar(){

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left = Math.random()*window.innerWidth+"px";
    star.style.top = Math.random()*250+"px";

    star.style.animationDuration =
        (Math.random()*2+1)+"s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(createStar,3500);
