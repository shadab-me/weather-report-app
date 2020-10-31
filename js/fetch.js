import {createUI} from './main.js'

let locationApiKey = 'e7a2258b738d4445a82928c912da0a47';
export function weatherLocation(){
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
}

export const getData = async (city = 'delhi') => {
    const apiKey = "8e4bcc04c2bc500c41a818e2f18046e5";
    const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},india&APPID=${apiKey}&units=metric`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    createUI(jsonResponse);
}

getData();