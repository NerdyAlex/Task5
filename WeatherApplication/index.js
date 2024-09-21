// const container = document.getElementById("container")
// for(let i = 0; i < 16; i++){
//     div = document.createElement("div")
//     div.style.backgroundColor = "aqua"
//     container.appendChild(div)
//     changecolor(div)

//     function changecolor(i){
//         div.addEventListener("mouseover",
//             () => i.style.backgroundColor = "blue")
//         div.addEventListener("mouseout",
//             () => i.style.backgroundColor = "yellow")

//         div.addEventListener("mousedown",
//             () => i.style.backgroundColor = "purple")
//     }
// }

// let api_key = "6db1f7df78e06de797813014a0fcd350"
// let input = "new york city"
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`)
// .then(reponse => reponse.json())
//     .then(data => console.log(data))
// .catch(error => console.error(error))








const searchbtn = document.querySelector("#searchbtn")

searchbtn.addEventListener("click", function(){
    weathercall()
});



async function weathercall() {

    
    let input = document.querySelector("#input").value;
    let cityname = document.querySelector("#city")
    let humi = document.querySelector("#humi")
    let wind = document.querySelector("#wind")
    let weatherdiv = document.getElementById("weather")
    weatherdiv.style.display = "none"
    let info = document.getElementById("info")
    info.style.display = "none"

    api_key = "5548a2497a58c868fd9b26d8fc07dba8";

    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`);


    let data = await weather.json();
    
    if(data.cod == 200){
        error.style.display = "none"
        humi.textContent = data.main.humidity + "%"
        cityname.textContent = data.name
        wind.textContent = data.wind.speed + "m/s"
        weatherchange(data)
        istemparature(data)
        weatherdiv.style.display = "block"
        info.style.display = "flex"
        let extra = document.getElementById("extra")
        extra.style.display = "flex"

        changebgc(data)
        // thing to change
        /* 
        completed

        */
    
        function changebgc(data) {
            
            let time = new Date()
            // converts my time(current) into my utctime(my timezone time)
            let utctime = time.getTime() + (time.getTimezoneOffset() * 60000)
            // collect the timezone from the weather data
            let datatime = data.timezone;
            // add my timezone to the weather data timezone
            let citytime = new Date(utctime + (datatime * 1000))
            // getting the hours from citytime
            let hours = citytime.getUTCHours();


            if (hours >= 6 && hours <=8) {
                // early morning
                document.body.style.background = "linear-gradient(to bottom, #1e3c72, #2a5298, #6dd5ed, #f0e68c)"
            }
            else if (hours >= 9 && hours <= 11) {
                // late morning
                document.body.style.background = "linear-gradient(to bottom, #87ceeb, #00bfff, #ffffff)"
            }

            else if (hours >= 12 && hours <= 16) {
                // afternoon
                document.body.style.background = "linear-gradient(to bottom, #00bfff, #ff7f50, #ffd700)"
            }
            else if (hours >= 17 && hours <= 21) {
                // evening
                document.body.style.background = "linear-gradient(to bottom, #ff7e5f, #feb47b, #d3a4b0, #1e3c72)"
            }
            else if (hours >= 22 && hours <= 23) {
                // night
                document.body.style.background = "linear-gradient(to bottom, #001428, #000e92, #2c3e50)"
            }
            else{
                // midnight
                document.body.style.background = "linear-gradient(to bottom, #003a80, #002850, #001a33)"
            }
        }
    }
    else{
        weatherdiv.style.display = "none"
        let error = document.getElementById("error")

        error.textContent = `${input} is Not a city`
        error.style.display = "block"
        document.body.style.background = "black"
        

    }

}

function istemparature(data) {
    let temp = document.querySelector("#temp")
    let oldtemp = Number(data.main.temp);
    let newtemp = Math.floor(5 / 9 * (oldtemp - 32));
    temp.textContent = `${newtemp}°C`
}

function weatherchange(data){
    let weatherchange = document.querySelector("#weatherchange")
    if (data.weather[0].main === 'Rain'){
        weatherchange.src = "weather-app-imgs/rain.png"
    }
    else if (data.weather[0].main === 'Snow') {
        weatherchange.src = "weather-app-imgs/snow.png"
    }
    else if (data.weather[0].main === 'Drizzle') {
        weatherchange.src = "weather-app-imgs/drizzle.png"
    }
    else if (data.weather[0].main === 'Mist') {
        weatherchange.src = "weather-app-imgs/mist.png"
    }
    else if (data.weather[0].main === 'Clouds') {
        weatherchange.src = "weather-app-imgs/clouds.png"
    }
    else{
        weatherchange.src = "weather-app-imgs/clear.png"
    }
}