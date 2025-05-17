const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const pageContent = document.querySelector('.page-content');

menuToggle.addEventListener('click', () => {
  const scrollY = window.scrollY; 

 
  sidebar.classList.toggle('open');
  menuToggle.classList.toggle('active');
  pageContent.classList.toggle('shifted');  

  requestAnimationFrame(() => {
    window.scrollTo(0, scrollY);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnSearch = document.querySelector(".btn-search");
  const searchHeader = document.querySelector(".search-header");
  const removeForm = document.querySelector(".remove-form");

  btnSearch.addEventListener("click", function () {
    searchHeader.style.display = "block";
    sidebar.classList.remove("open"); 
    menuToggle.classList.remove("active"); 
    pageContent.classList.remove("shifted"); 

    requestAnimationFrame(() => {
      document.getElementById("searchInput").focus({ preventScroll: true });
    });
  });

  removeForm.addEventListener("click", function () {
    searchHeader.style.display = "none";
  });
});

// Sticky menu la scroll
const meniu = document.querySelector('.meniu');
const placeholder = document.getElementById('meniu-placeholder');
const offsetTop = meniu.offsetTop;
let isSticky = false;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  if (scrollY > 100 && !isSticky) {
    meniu.classList.add('sticky');
    meniu.style.top = '0';  
    placeholder.style.height = meniu.offsetHeight + 'px'; 
    isSticky = true;
  } 
  
  else if (scrollY <= 100 && isSticky) {
    meniu.classList.remove('sticky');
    meniu.style.top = '-100px';  
    placeholder.style.height = '0px'; 
    isSticky = false;
  }
});

document.styleSheets[0].insertRule(`
  .page-content.shifted {
    transform: translateX(-250px);  /* Ajustează lățimea în funcție de lățimea sidebar-ului */
    transition: transform 0.3s ease;
  }
`, document.styleSheets[0].cssRules.length);

// Resetăm transform-ul când lățimea ecranului este mare
window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
 
  if (windowWidth > 1040) {
   
    pageContent.classList.remove('shifted');
    sidebar.classList.remove('open');
    menuToggle.classList.remove('active');
  }
});



// Countdown "Deal of the Day"
let totalSeconds = 23 * 3600 + 32 * 60 + 44;

function updateCountdown() {
  const countdown = document.querySelector('.countdown_is');
  if (!countdown) return;

  const hoursEl = countdown.querySelectorAll('.countdown-amount')[0];
  const minutesEl = countdown.querySelectorAll('.countdown-amount')[1];
  const secondsEl = countdown.querySelectorAll('.countdown-amount')[2];

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');

  if (totalSeconds > 0) {
    totalSeconds--;
    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();
