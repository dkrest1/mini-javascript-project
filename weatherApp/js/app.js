// init Storage
const storage = new Storage();

const defaultLocation = storage.getLocation()

// init weather
const weather = new Weather(defaultLocation.city, defaultLocation.country);
// init ui
const ui = new UI();


//display weather on window loading
window.addEventListener('DOMContentLoaded', getweather);

document.getElementById('weather-location-btn').addEventListener('click', (e) => {
    const cityInput = document.getElementById('city');
    const countryInput = document.getElementById('country');

    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
     // clear input
     cityInput.value = '';
     countryInput.value = '';
    weather.changeLocation(city, country);
    storage.setLocation(city, country);
    // get weather and display weather
    getweather()
    // close modal
    $('#changeLocationModal').modal('hide')
})

function getweather() {
    weather.getWeather()
    .then((result) => {
       ui.paintUI(result)
    
    })
}

