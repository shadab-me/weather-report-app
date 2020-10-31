import {print, render} from './helper.js';
import {weatherLocation, getData} from  './fetch.js';


const cityName = document.querySelector('#input');
const search = document.querySelector('#submit');

window.addEventListener('load', () => {
       weatherLocation();
});

export function createUI(jsonResponse) {
    const nameOfCity = `<h3>${jsonResponse.name}, ${jsonResponse.sys.country} Weather</h3>`;
    print(jsonResponse.main.temp)
    print(jsonResponse.main.temp);
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
    let city = cityName.value;
    getData(city)
    rawCity.value = ''

});

cityName.addEventListener('keypress', (e) => {
     if (e.key == 'Enter') {
        let city = cityName.value;
        getData(city)
        cityName.value = ''
    }
})

