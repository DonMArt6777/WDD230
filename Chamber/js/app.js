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

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];

// console.log(day)