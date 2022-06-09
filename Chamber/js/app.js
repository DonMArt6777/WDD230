var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.querySelector('.current-date').innerHTML = ` Last Modification: ${date} ${time}`

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

document.querySelector('.current-time').innerHTML = `${fulldate}`


function toggleMenu() {
	document.querySelector('.primary-nav').classList.toggle("open");
}

const x = document.querySelector('.hamburger')
x.onclick = toggleMenu; 

const bunner = document.querySelector('.bunner');
const day = now.getDay()

if (day === 2){
	bunner.style.display = "block"
}

else {
	bunner.style.display = "none"
}

let imagesToload = document.querySelectorAll('img[data-src]');


const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
}
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  }
}

imagesToload.forEach((img) => {
  loadImages(img);
})

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target)
      }
    }, imgOptions);
  });
}
else {
  imagesToload.forEach((img) => {
    loadImages(img);
  });
}

const todayDisplay = document.querySelector('.today');
const visitDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("visits-ls"))

if (numVisits !=0) {
  visitDisplay.textContent = numVisits;
}

else {
  visitDisplay.textContent = 'This is your First visit'
}

numVisits++;

localStorage.setItem("visits-ls", numVisits)

todayDisplay.textContent = Date.now()