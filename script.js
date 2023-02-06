function getWeather(){
    let cityName = id_city.value;
    console.log(cityName);
 

   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).then(res=>res.json()).then(data=>{
   console.log("hello thereee"); 
   displayWeather(data)
    
})


  
}

function displayWeather(data){
    console.log(data)
    let temperature = data.main.temp;
    let minData = data.main.temp_min;
    let maxData = data.main.temp_max;

    id_location.innerHTML = `<span class="text-center fw-bold" style="margin-left: 420px;">Weather in ${data.name}</span>`

    let htmlData = `
    <div class="card text-center bg-warning" style="--bs-bg-opacity:80%;">
    <div class="card-header">
      ${temperature}
    </div>
    <div class="card-body">
      <h5 class="card-title">Temperature is ${temperature} </h5>
      <p class="card-text">Minimum Temperature is${minData}</p>
      <p class="card-text">Maximum Temperature is${maxData}</p>
      
    </div>
    <div class="card-footer text-muted">
      Today
    </div>
  </div>
    `
let humidity = data.main.humidity;
let windDegree = data.wind.deg;
let feelsLike = data.main.feels_like;

let humiditydata=`
<div class="card text-center bg-warning" style="--bs-bg-opacity:80%;">
<div class="card-header">
  Humidity Info
</div>
<div class="card-body">
  <h5 class="card-title">Humidity is ${humidity} </h5>
  <p class="card-text">Wind Degree is${windDegree}</p>
  <p class="card-text">Feels like is is${feelsLike}</p>
  
</div>
<div class="card-footer text-muted">
  Today
</div>
</div>


`

let windspeed = data.wind.speed;
let sunrisetime =data.sys.sunrise;
let sunsettime = data.sys.sunset;

let windData = `
<div class="card text-center bg-warning" style="--bs-bg-opacity:80%;">
<div class="card-header">
  Wind Info
</div>
<div class="card-body">
  <h5 class="card-title">${windspeed}Km/hr </h5>
  <p class="card-text">sunriset time is ${sunrisetime}</p>
  <p class="card-text">sunset time is is ${sunsettime}</p>
  
</div>
<div class="card-footer text-muted">
  Today
</div>
</div>


`

id_humidity.innerHTML = humiditydata
id_temp.innerHTML= htmlData
id_wind.innerHTML = windData



}

function getWeatherByLocation(){

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=10.51&lon=76.21&appid=c7f1c5cd6b943f74ff5618255419344a`).
  then(res=>res.json()).then(data=>displayWeather(data))
    })

  }
  
}