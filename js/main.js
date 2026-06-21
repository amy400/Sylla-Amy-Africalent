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
function initFreelanceFilter() {
  const bts = document.querySelectorAll('.bt') ;
  const cards = document.querySelectorAll('.col');

  if (!bts.length || !cards.length) return;

  bts.forEach(bt => {
    bt.addEventListener('click', () => {
      bts.forEach(c => c.classList.remove('active'));
      bt.classList.add('active');

      const filter = bt.dataset.filter;
      cards.forEach(col => {
        const card = col.querySelector('.card');
        if(!card) return;

        const cardCategory = card.dataset.category;
        const show = filter === 'all' || card.dataset.category === filter;
        col.style.display =  '' ;

        if (show) {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          

          card.offsetHeight;

          card.style.transition = 'opacity 0.3s ease , transform 0.3s ease';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        
        }
        else{
          col.style.display = 'none';
        }
      })
    })
  })
}
document.addEventListener('DOMContentLoaded', initFreelanceFilter);


//FORMULAIRE DE CONTACT 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = form.querySelector('button[type="submit"]');

  const nom = document.getElementById('nom');
  const prenom = document.getElementById('prenom');
  const email = document.getElementById('inputEmail4');
  const sujet = document.getElementById('inputState');
  const message = document.getElementById('message');
  const check = document.getElementById('gridCheck');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setValid(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  }

  function setInvalid(input) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }

  function validateNom() {
    if (!nom.value.trim()) {
      setInvalid(nom);
      return false;
    }
    setValid(nom);
    return true;
  }

  function validatePrenom() {
    if (!prenom.value.trim()) {
      setInvalid(prenom);
      return false;
    }
    setValid(prenom);
    return true;
  }

  function validateEmail() {
    const value = email.value.trim();
    if (!value || !emailRegex.test(value)) {
      setInvalid(email);
      return false;
    }
    setValid(email);
    return true;
  }

  function validateSujet() {
    if (sujet.value =="choisir un sujet") {
      setInvalid(sujet);
      return false;
    }
    setValid(sujet);
    return true;
  }

  function validateMessage() {
    const value = message.value.trim();
    if (value.length < 20) {
      setInvalid(message);
      return false;
    }
    setValid(message);
    return true;
  }

  function validateCheck() {
    if (!check.checked) {
      setInvalid(check);
      return false;
    }
    setValid(check);
    return true;
  }

  // Validation en temps réel
  nom.addEventListener('blur', validateNom);
  prenom.addEventListener('blur', validatePrenom);
  email.addEventListener('blur', validateEmail);
  sujet.addEventListener('change', validateSujet);
  message.addEventListener('blur', validateMessage);
  check.addEventListener('change', validateCheck);

  // Soumission du formulaire
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const checks = [
      validateNom(),
      validatePrenom(),
      validateEmail(),
      validateSujet(),
      validateMessage(),
      validateCheck(),
    ];

    const isFormValid = checks.every(Boolean);

    // Réinitialise les classes de couleur du bouton avant chaque tentative
    submitBtn.classList.remove('btn-success-state', 'btn-error-state');

    if (isFormValid) {
      successMessage.classList.remove('d-none');
      submitBtn.classList.add('btn-success-state');

      form.reset();
      form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));

      setTimeout(() => {
        successMessage.classList.add('d-none');
        submitBtn.classList.remove('btn-success-state');
      }, 5000);
    } else {
      successMessage.classList.add('d-none');
      submitBtn.classList.add('btn-error-state');

      setTimeout(() => {
        submitBtn.classList.remove('btn-error-state');
      }, 3000);
    }
  });
});