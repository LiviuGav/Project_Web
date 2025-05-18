const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const pageContent = document.querySelector('.page-content');
const surprise = document.querySelector(".surprise");
const searchHeader = document.querySelector(".search-header");
const surprise1 = document.querySelector(".surprise-1");
const surprise2 = document.querySelector(".surprise-2");

// set up text to print, each item in array is new line
var aText = new Array(
"La multi ani Iustin!",
"Sa ai parte de tot ce e mai bun in viata!",
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

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
  
  if (scrollY > 90 && !isSticky) {
    meniu.classList.add('sticky');
    meniu.style.top = '0';  
    placeholder.style.height = meniu.offsetHeight + 'px'; 
    isSticky = true;
  } 
  
  else if (scrollY <= 90 && isSticky) {
    meniu.classList.remove('sticky');
    meniu.style.top = '-100px';  
    placeholder.style.height = '0px'; 
    isSticky = false;
  }
});

document.styleSheets[0].insertRule(`
  .page-content.shifted {
    transform: translateX(-250px); 
    transition: transform 0.3s ease;
  }
`, document.styleSheets[0].cssRules.length);


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

document.addEventListener("DOMContentLoaded", function () {
    const pTitle = document.querySelector(".p-title");
    const pText = document.querySelector(".p-text");
    const button = document.querySelector(".button");

    setTimeout(() => {
      pTitle.classList.replace("hidden", "appear");
    }, 500);

    setTimeout(() => {
      pText.classList.replace("hidden", "appear");
    }, 1000);

    setTimeout(() => {
      button.classList.replace("hidden", "appear");
    }, 1500);
  });

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim().toUpperCase();
  
  if (query.includes("IUSTIN")) {
    searchHeader.style.display = "none";
    surprise1.classList.toggle('gate1');
    surprise2.classList.toggle('gate2');

    setTimeout(() => {
    typewriter();
  }, 1000);

  } else {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
  
});

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("text_tastat");
 destination.style.padding = "10px 50px";
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}






