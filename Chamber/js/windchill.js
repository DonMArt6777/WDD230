const currentTemp = document.querySelector('.current-temp');
const windspeed = document.querySelector('.wind-speed');
const wind_chill = document.querySelector('.wind-chill')
const weatherIcon = document.querySelector('#weather-icon')

const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=ee04980b30205f93679902b3006148dd&units=imperial'

async function apiFetch(){
  try{
    const response = await fetch(url);

    if(response.ok) {
      const data = await response.json();

      displayresults(data)
      console.log(data)
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
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>&#8457;`

  windspeed.innerHTML = `Wind Speed: ${weatherData.wind.speed}km/hr`

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;


  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);

  weatherIcon.setAttribute('alt', desc);
  captionDesc.textcontent = desc


}

if (currentTemp <=50 || windspeed > 3.0 ) {
  const wcv = (35.74+0.6215)*currentTemp-(35.75*8^0.16+0.4275)**8^0.16
  wind_chill.innerHTML = `<p>Wind Speed: ${wcv}</p>`
  console.log(wcv)

}

else {
  let wcv = 'N/A';
  wind_chill.innerHTML = `<p>Wind Chill: ${wcv}</p>`
}




