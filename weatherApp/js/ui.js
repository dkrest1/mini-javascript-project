class UI {
    constructor () {
        this.weatherIcon = document.getElementById('weather-icon');
        this.weatherDescription = document.getElementById('weather-description');
        this.weatherLocation = document.getElementById('weather-location');
        this.weatherTemperature = document.getElementById('weather-temperature');
        this.weatherFeelLike = document.getElementById('weather-feelLike');
        this.weatherMinTemp = document.getElementById('min-temp');
        this.weatherMaxTemp = document.getElementById('max-temp');
        this.weatherHumidity = document.getElementById('weather-humidity');
        this.weatherPressure = document.getElementById('weather-pressure');
        this.weatherCloud = document.getElementById('weather-cloud');
    }

    paintUI(data) {
        this.weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        this.weatherDescription.innerText = data.weather[0].description;
        this.weatherLocation.innerText = `${data.name}, ${data.sys.country}`;
        this.weatherTemperature.innerHTML = `${data.main.temp}<span>&deg;</span>`;
        this.weatherFeelLike.innerHTML = `Feels like: ${data.main.feels_like}<span>&deg</span>`;
        this.weatherMinTemp.innerHTML = `<span>&#10515; </span>${data.main.temp_min}<span>&deg;</span>`;
        this.weatherMaxTemp.innerHTML = `<span class="max-temp">&#10514; </span>${data.main.temp_max}<span>&deg;</span>`;
        this.weatherHumidity.innerHTML = `<span class="lead size">Humidty</span><span>${data.main.humidity}%</span>`;
        this.weatherPressure.innerHTML = `<span class="lead size">Pressure</span><span>${data.main.pressure}hPa</span>`;
        this.weatherCloud.innerHTML = `<span class="lead size">Cloud(all)</span><span>${data.clouds.all}%</span>`

    }
}