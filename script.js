
const apiKey = "81f1ac5a2e9f6f2e8651c55220fe127e"; 


function getWeather() {
    const city = document.getElementById("city-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
            } else {
                displayWeather(data);
            }
        })
        .catch(err => {
            alert("Error fetching data. Please try again later.");
        });
}

// Function to display weather data
function displayWeather(data) {
    document.getElementById("city-name").innerText = data.name + ", " + data.sys.country;
    document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + "°C";
    document.getElementById("description").innerText = "Weather: " + data.weather[0].description;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind-speed").innerText = "Wind Speed: " + data.wind.speed + " m/s";

    document.getElementById("weather-info").style.display = "block";
}
