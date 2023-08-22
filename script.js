var weather = {
    apiKey: "0b73120c24a692d119c9a7b8c0a8b800",
    fetchWeather : function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayeWeather(data));
    },
    displayeWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "humidity " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed " + speed + "km/h";

        document.querySelector(".weather").classList.remove("loading");
        // filter in Iran
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600×900/?"+ name +"')"
    },
    search: function() {
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Denver");