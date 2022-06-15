const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
const cards = document.querySelector('.card')

fetch(requestURL)
.then((res)=> {
  return res.json()
})

.then((jsonObject)=> {
  console.log(jsonObject)
  const prophets = jsonObject['prophets']

  prophets.forEach(displayProphets)
})

const displayProphets = (prophet)=>{
  // Create elements to add to the document
  let card = document.createElement('section');

  let h2 = document.createElement('h2')

  let bd = document.createElement('p');

  let bp = document.createElement('p');
  bp.textContent= `Birth Place: ${prophet.birthplace}`

  bd.textContent = `BirthDate: ${prophet.birthdate}`

  let portrait = document.createElement('img')

  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`)
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(bd)
  card.appendChild(bp)
  card.appendChild(portrait)
 

  // Append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}