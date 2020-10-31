let locationApiKey = 'e7a2258b738d4445a82928c912da0a47';
window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long, lat)
            let api_url = `https://api.opencagedata.com/geocode/v1/json?key=${locationApiKey}&q=${lat + ' ' + long}`;
            fetch(api_url).then(data => data.json()).then(response => getData(response.results[0].components.city))
        })
    }
});


const rawCity = document.querySelector('#input');
const search = document.querySelector('#submit');

function CreateUI(jsonResponse) {
    const nameOfCity = `<h3>${jsonResponse.name}, ${jsonResponse.sys.country} Weather</h3>`;
    console.log(jsonResponse.main.temp)
    console.log(jsonResponse.main.temp);
    const temp = `<h3'><span class = 'text-warning display-2'> ${jsonResponse.main.temp.toString().split('.')[0]}</span><span>°C</span> </h3>`;
    const tempMax = `<p>  Temp-max: ${jsonResponse.main.temp_max}</p>`;
    const tempMin = `<p>  Temp-min: ${jsonResponse.main.temp_min}</p>`;
    const des = `<p class = 'text-muted'>${jsonResponse.weather[0].description}</p>`;
    const wind = `<h3>${jsonResponse.wind.speed} kh/h </h3>`;
    const humidity = `<h3>${jsonResponse.main.humidity} kh/h </h3>`;
    const pressure = `<h3>${jsonResponse.main.pressure} pa </h3>`;
    const currentTime = `<p class = 'text-muted'> last updated on ${new Date().toLocaleString()}</p>`
    render(nameOfCity, '#cityName');
    render(temp, '#temp');
    render(tempMax, '#temp-max');
    render(tempMin, '#temp-min');
    render(des, '#des');
    render(wind, '#wind');
    render(humidity, "#humidity")
    render(pressure, '#pressure')
    render(currentTime, "#current-time");
}

search.addEventListener('click', (e) => {
    e.preventDefault();
    let city = rawCity.value;
    getData(city)
    rawCity.value = ''

});

rawCity.addEventListener('keypress', (e) => {
     if (e.key == 'Enter') {
        let city = rawCity.value;
        getData(city)
        rawCity.value = ''
    }
})
const getData = async (city = 'delhi') => {
    const apiKey = "8e4bcc04c2bc500c41a818e2f18046e5";
    const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},india&APPID=${apiKey}&units=metric`;
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