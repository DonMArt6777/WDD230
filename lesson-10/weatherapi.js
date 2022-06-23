// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=ee04980b30205f93679902b3006148dd&units=imperial'

async function apiFetch(){
  try{
    const response = await fetch(url);

    if(response.ok) {
      const data = await response.json();

      displayresults(data)
    }

    else{
      throw Error(await response.text());
    }
  } catch (error){
    console.log(error);
  }
}

apiFetch();

function displayresults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);

  weatherIcon.setAttribute('alt', desc);
  captionDesc.textcontent = desc
}

