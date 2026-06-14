const btn = document.getElementById("btn");
const body = document.body;
//theme Dark/Light 
const savedTheme = localStorage.getItem("theme");

if   (savedTheme === "dark"){
       body.classList.add("dark-mode-acceuil");
}

btn.addEventListener("click",() =>{
    body.classList.toggle("dark-mode-acceuil");
    if(body.classList.contains("dark-mode-acceuil")){
     localStorage.setItem("theme", "dark");
    }
    else{
     localStorage.setItem("theme", "light");
    }
});
// navbar dynamique au scroll
const navbar= document.querySelector(".bg")

const backToTopBtn= document.getElementById("backtotop")
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

  // Apparaît après 300px de scroll
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
//action de retour 
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});
// COMPTEURS staTISTIQUE 
document.addEventListener("DOMContentLoaded", () => {

  // Fonction qui anime un compteur (votre code d'origine, inchangé)
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);

    const prefix = counter.getAttribute("data-prefix");
    const suffix = counter.getAttribute("data-suffix");
    const duration = 2000;
    let startTime = null;

    const updateNumber = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const currentValue = Math.floor(progress * target);
      counter.textContent = `${prefix}${currentValue}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(updateNumber);
      } else {
        counter.textContent = target;
         counter.textContent = `${currentValue}${suffix}`;
      }
    };
    window.requestAnimationFrame(updateNumber);
  };

  //  ON CIBLE LA DIV PARENTE
  const illustrations = document.querySelectorAll(".illustration, .scrolled-brand");
   
  //  L'OBSERVER REGADE LA DIV PARENTE
  const globalObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //  On fait apparaître la DIV en fondu (ajoute is-visible)
        entry.target.classList.add("is-visible");

        //  On cherche TOUS les span ".statistique" à l'intérieur de CETTE div
        const counters = entry.target.querySelectorAll(".statistique");
        
        // On lance l'animation de chaque chiffre immédiatement
        counters.forEach(counter => animateCounter(counter));

        //  On arrête d'observer cette div
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Se déclenche dès que 10% de la div est visible

  //  ON LANCE L'OBSERVATION SUR LA DIV
  illustrations.forEach(div => {
    globalObserver.observe(div);
  });
  illustrations.forEach(span => {
    globalObserver.observe(span);
  });
  
    
});
// animation des section 
document.addEventListener('DOMContentLoaded', () => {

  const categor = document.querySelectorAll('.fades');
 
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 
  };

  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  categor.forEach(div => {
    observer.observe(div)
  });
});
//afritalent

  const text = document.querySelectorAll('.fades');
 
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 
  };
 const callback = ((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      } else{
        entry.target.classList.remove('is-visible');
      }
    });
  });
// Filtrage par categories

