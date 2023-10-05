import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = "092ca79e6d5625ce3e2d9a03bc74c283"; // replace with your actual API key
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const fetchWeatherData = () => {
        const params = {
            lat: location.lat,
            lon: location.lon,
            appid: apiKey,
        };

        axios.get(apiUrl, { params })
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data', error);
            });
    };

    return (
        <div>
            <button className='bg-green-500' onClick={fetchWeatherData}>Get Weather Data</button>
            
            {weatherData && (
                <div>
                    <h2>Weather Information for {weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {weatherData.main.temp} K</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
