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

const requestjson = 'https://dombreaker36.github.io/WDD230/Chamber/js/data.json'

const myCards = document.querySelector('.cards')
const spotlight1 = document.querySelector('.grid-3')


fetch(requestjson)
.then((res)=>{
  return res.json()
}
)
.then ((jsonObject)=>{
  const business = jsonObject["business"];

  business.forEach(displayBusiness)
  

})
const displayBusiness = (business)=>{
  // Create elements to add to the document
  let cards = document.createElement('section');

  let h2 = document.createElement('h2')

  let Adress = document.createElement('p');
  let membership = document.createElement('p')

  let phoneNumber = document.createElement('p');
  Adress.textContent= `Address: ${business.Address}`
  membership.textContent = `Membership: ${business.membership}`

  phoneNumber.textContent = `Phone Number: ${business.phoneNumber}`

  let portrait = document.createElement('img')

  h2.textContent = `${business.companyName}`;

  portrait.setAttribute('src', business.imgaeurl);
  portrait.setAttribute('alt', `portrait of ${business.companyName}`)
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  cards.appendChild(h2);
  cards.appendChild(Adress)
  cards.appendChild(phoneNumber)
  cards.appendChild(portrait)
  cards.appendChild(membership)
 

  // Append the existing HTML div with the cards class with the section(card)
  myCards.appendChild(cards);
}

const spotlightarr = [
  {
    "companyName": "TOSHA UGANDA LIMITED",
    "Address": "371233 Makindye Road ",
    "phoneNumber": "+256-767-7889",
    "imgaeurl": "https://dombreaker36.github.io/WDD230/Chamber/images/imagen.jpg",
    "membership": "Gold"
},
{
    "companyName": "RWENZORI UGANDA LIMITED",
    "Address": "37847 Jinja road ",
    "phoneNumber": "+256-767-7889",
    "imgaeurl": "https://dombreaker36.github.io/WDD230/Chamber/images/imagef.jpg",
    "membership": "None Profitable"
},
{
    "companyName": "ICE UGANDA LIMITED",
    "Address": "37849 Kampala Social Security House 4th Floor ",
    "phoneNumber": "+256-767-7889",
    "imgaeurl": "https://dombreaker36.github.io/WDD230/Chamber/images/imagej.jpg",
    "membership": "Bronze"
}
]



  const displaySpotlight = (business)=>{
  // Create elements to add to the document
  let spotlight = document.createElement('div');

    spotlight.classList.add('spotlight-1')

  let h2 = document.createElement('h2')

  let Adress = document.createElement('p');
    Adress.classList.add('address')
  let membership = document.createElement('p')
  membership.classList.add('member')

  let phoneNumber = document.createElement('p');
  Adress.textContent= `Address: ${business.Address}`
  membership.textContent = `Membership: ${business.membership}`

  phoneNumber.textContent = `Phone Number: ${business.phoneNumber}`

  let portrait = document.createElement('img')

  h2.textContent = `${business.companyName}`;

  portrait.setAttribute('src', business.imgaeurl);
  portrait.setAttribute('alt', `portrait of ${business.companyName}`)
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  spotlight.appendChild(h2);
  spotlight.appendChild(portrait)
  spotlight.appendChild(Adress)
  spotlight.appendChild(phoneNumber)
  
  spotlight.appendChild(membership)
 

  // Append the existing HTML div with the cards class with the section(card)
  spotlight1.appendChild(spotlight);
}

console.log(spotlightarr)


spotlightarr.forEach(displaySpotlight)

