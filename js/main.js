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

const rawcity = document.querySelector('#input');
const search = document.querySelector('#submit');
search.addEventListener('click', (e) => {
    e.preventDefault();
    const city = rawcity.value;
    console.log(city);
    if(city){
   const apikey = "8e4bcc04c2bc500c41a818e2f18046e5";
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},india&APPID=${apikey}`;
   const getData = async () => {
    const response = await fetch(url);
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    const nameofCity  =`<h1>${jsonresponse.name}</h1>`;
    console.log(jsonresponse.main.temp.value);
    const temp = `<h3> Current Temp: ${jsonresponse.main.temp}</h1>`;
    const tempMax =`<h3>  Temp-max: ${jsonresponse.main.temp_max}</h1>`;
    const tempMin =`<h3>  Temp-min: ${jsonresponse.main.temp_min}</h1>`;
    const des = `<h3> Weather Description: ${jsonresponse.weather[0].description}</h3>`;
    const wind = `<h3> Weather Wind Speed: ${jsonresponse.wind.speed} </h3>`;
    const windD = `<h3> Weather Wind Speed Degree: ${jsonresponse.wind.deg}</h3>`;
    render(nameofCity, '#cityName');
    render(temp, '#temp');
    render(tempMax, '#temp-max');
    render(tempMin, '#temp-min');
    render(des, '#des');
    render(wind, '#wind');
    render(windD, "#windD");
    
   }
   

getData();
    }else{
        alert('plz enter city name');
    }
});
 

var render = function (template, selector) {
	var node = document.querySelector(selector);
	if (!node) return;
	node.innerHTML = template;
};

var cal = function(k){
    return k - 273;
}
