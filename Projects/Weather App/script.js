document.addEventListener('DOMContentLoaded', () => {
    const getWeather = document.getElementById('get-weather-btn');
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
    const errorMessage = document.getElementById('error-message');
    const cityDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const API_KEY = 'b8d1b76767c5a09ee59a4ef2096ed542';

    getWeather.addEventListener('click', async() => {
        const city = cityInput.value.trim();
        if(!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);   
        }
        catch(error){
            showError();
        }
        async function fetchWeatherData(city){
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("City not found.");
            }
            const data = await response.json();
            return data;
        }

        function displayWeatherData(data){
            const {name, main, weather} = data;
            cityDisplay.textContent = name;
            temperatureDisplay.textContent = `Temperature: ${main.temp}`;
            descriptionDisplay.textContent = `Weather: ${weather[0].description}`
            weatherInfo.classList.remove("hidden");
            errorMessage.classList.add("hidden");
        }

        function showError(){
            weatherInfo.classList.add("hidden");
            errorMessage.classList.remove("hidden");
        }
    })   
})