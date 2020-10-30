 
/*window.addEventListener('load',() =>{
let long;
let lat;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(long, lat)
    })
}


})*/
const rawCity = document.querySelector('#input');
const search = document.querySelector('#submit');

function CreateUI(jsonResponse){
    const nameOfCity = `<h3>${jsonResponse.name}, ${jsonResponse.sys.country} Weather</h3>`;
    console.log(jsonResponse.main.temp.value);
    const temp = `<h3'><span class = 'text-warning display-2'> ${jsonResponse.main.temp}</span><span>°C</span> </h3>`;
    const tempMax = `<p>  Temp-max: ${jsonResponse.main.temp_max}</p>`;
    const tempMin = `<p>  Temp-min: ${jsonResponse.main.temp_min}</p>`;
    const des = `<p class = 'text-muted'>${jsonResponse.weather[0].description}</p>`;
    const wind = `<p>${jsonResponse.wind.speed} </p>`;
    const windD = `<p>${jsonResponse.wind.deg}</p>`;
    const currentTime = `<p class = 'text-muted'> last updated on ${new Date().toLocaleString()}</p>`
    render(nameOfCity, '#cityName');
    render(temp, '#temp');
    render(tempMax, '#temp-max');
    render(tempMin, '#temp-min');
    render(des, '#des');
    render(wind, '#wind');
    render(windD, "#windD");
    render(currentTime, "#current-time");
}

search.addEventListener('click', (e) => {
 e.preventDefault();
 let city = rawCity.value;
     getData(city)

});

rawCity.addEventListener('keypress', (e) => {
 if(e == 'Enter'){
    let city = rawCity.value;
     getData(city)
 }
})
const getData = async (city = 'delhi') => {
    const apiKey = "8e4bcc04c2bc500c41a818e2f18046e5";
     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},india&APPID=${apiKey}&units=metric`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    CreateUI(jsonResponse);
}


getData();
var render = function (template, selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};