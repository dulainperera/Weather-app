const apiKey ="a058d3dc4a8e5b380e364852b33e1767";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=&units=metric";

const searchBox = document.querySelector(".search input");

const searchButton = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
 
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.main.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icons/clouds.png";

    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icons/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "icons/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "icons/snow.png";
    }
    else{
        weatherIcon.src = "icons/unknown.png";
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});