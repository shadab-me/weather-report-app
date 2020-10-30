 
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
let city = rawCity.value;



function CreateUI(jsonResponse){
    c
    const nameOfCity = `<h1>${jsonResponse.name}</h1>`;
    console.log(jsonResponse.main.temp.value);
    const temp = `<p> Current Temp: ${jsonResponse.main.temp} </p>`;
    const tempMax = `<p>  Temp-max: ${jsonResponse.main.temp_max}</p>`;
    const tempMin = `<p>  Temp-min: ${jsonResponse.main.temp_min}</p>`;
    const des = `<p> Weather Description: ${jsonResponse.weather[0].description}</p>`;
    const wind = `<p> Weather Wind Speed: ${jsonResponse.wind.speed} </p>`;
    const windD = `<p> Weather Wind Speed Degree: ${jsonResponse.wind.deg}</p>`;
    render(nameOfCity, '#cityName');
    render(temp, '#temp');
    render(tempMax, '#temp-max');
    render(tempMin, '#temp-min');
    render(des, '#des');
    render(wind, '#wind');
    render(windD, "#windD");
}

search.addEventListener('click', (e) => {
 e.preventDefault();
    getData(city)

});

rawCity.addEventListener('keypress', (e) => {
 if(e == 'Enter'){
     getData(city)
 }
})
const getData = async (city = 'Delhi') => {
    const apiKey = "8e4bcc04c2bc500c41a818e2f18046e5";
     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},india&APPID=${apiKey}&units=metric`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    CreateUI(jsonResponse)
}


getData();

var render = function (template, selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};