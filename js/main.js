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