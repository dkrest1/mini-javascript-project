class Weather {
    constructor (city, country) {
        this.apiKey = '6d653ad7cfe3714234a56421bb8fc3bd';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);
        const response = await responseWeather.json();
        return response
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country
    }
}