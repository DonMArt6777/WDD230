const temp = document.querySelector('.current-temp');
const windspeed = document.querySelector('.wind-speed');
const wind_chill = document.querySelector('.wind-chill')


const calc_wind_chill= () => {

  if (temp <=50 || windspeed > 3.0 ) {
    let wcv = (35.74+0.6215)*temp-(35.75*8^0.16+0.4275)*temp*8^0.16
  return wcv

  }
  
  else {
    let wcv = N/A;
  return wcv

  }
}
