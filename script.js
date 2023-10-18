var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

var tableBodyWeather = document.getElementById('weather-table');
var fetchWeather = document.getElementById('fetch-weather');

var fetchPlaces = document.getElementById('fetch-places');
var fetchGeocode = document.getElementById('fetch-geocode');


function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            //Loop over the data to generate a table, each table row will have a link to the repo url
            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');

                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
        });
}

function getWeather() {
    var apiKey = '3aff5737440b30c8e962f8a23c414db4';
    var cityName = 'Minneapolis'
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            //Loop over the data to generate a table, each table row will have a link to the repo url
            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');

                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBodyWeather.appendChild(createTableRow);
            }
        });
}

// Function to display weather data in a nice way
const displayWeatherData = (data) => {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
};


function displayPlace(lat, lon) {

    var apiKey = '3aff5737440b30c8e962f8a23c414db4';
    var cityName = 'Minneapolis'
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    // var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var cityRow = document.createElement('tr');
            var cityData = document.createElement('td');
            cityData.textContent=data.name
            cityRow.append(cityData)
            var tempRow = document.createElement('tr');
            var tempData = document.createElement('td');
            tempData.textContent=" temp: "+data.main.temp +"F"
            tempRow.append(tempData)
            var weatherRow = document.createElement('tr');
            var weatherData = document.createElement('td');
            weatherData.textContent=" Conditions: "+data.weather[0].description
            weatherRow.append(weatherData)
            var humRow = document.createElement('tr');
            var humData = document.createElement('td');
            humData.textContent=" humidity: "+data.main.humidity +"%"
            humRow.append(humData)
            document.querySelector("#weather-table").append(cityRow,tempRow,weatherRow,humRow)
            //Loop over the data to generate a table, each table row will have a link to the repo url
            // for (var i = 0; i < data.length; i++) {
            //   // Creating elements, tablerow, tabledata, and anchor
            //   var createTableRow = document.createElement('tr');
            //   var tableData = document.createElement('td');
            //   var link = document.createElement('a');

            //   // Setting the text of link and the href of the link
            //   link.textContent = data[i].html_url;
            //   link.href = data[i].html_url;

            //   tableData.appendChild(link);
            //   createTableRow.appendChild(tableData);
            //   tableBodyWeather.appendChild(createTableRow);
            // }
        });
}

function displayGeocode() {

    var apikey = '3aff5737440b30c8e962f8a23c414db4';
    var cityName = 'Minneapolis';
    var state = 'MN';
    var countrycode = '55346';
    var limit = 10;

    // var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q={cityName},{state},{country code}&limit={limit}&appid={apikey}`
    var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state},${countrycode}&limit=${limit}&appid=${apikey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            //Loop over the data to generate a table, each table row will have a link to the repo url
            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');

                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBodyWeather.appendChild(createTableRow);
            }
        });
}

fetchButton.addEventListener('click', getApi);
fetchWeather.addEventListener('click', getWeather);

fetchPlaces.addEventListener('click', displayPlace);

fetchGeocode.addEventListener('click', displayGeocode);



// function geocodeAddress() {
//   const address = document.getElementById("address").value;
//   if (!address || address.length < 3) {
//     console.log("The address string is too short. Enter at least three symbols");
//     return;
//   }
//   myAPIKey = 'ae8fb1509dd84506babaa78221bde1bc';
//   const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

//   // call Geocoding API - 
//   fetch(geocodingUrl).then(result => result.json())
//     .then(featureCollection => {
//       console.log(featureCollection);
//     });
// }

function geocodeAddress() {
    const address = document.getElementById("address").value;
    if (!address || address.length < 3) {
        document.getElementById("status").textContent = "The address string is too short. Enter at least three symbols";
        return;
    }
    myAPIKey = 'ae8fb1509dd84506babaa78221bde1bc';
    const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

    // call Geocoding API - https://www.geoapify.com/geocoding-api/
    fetch(geocodingUrl).then(result => result.json())
        .then(featureCollection => {
            if (featureCollection.features.length === 0) {
                document.getElementById("status").textContent = "The address is not found";
                return;
            }
            console.log(featureCollection.features)
            const foundAddress = featureCollection.features[0];
            displayPlace(foundAddress.geometry.coordinates[1], foundAddress.geometry.coordinates[0])
            document.getElementById("name").value = foundAddress.properties.name || '';
            document.getElementById("house-number").value = foundAddress.properties.housenumber || '';
            document.getElementById("street").value = foundAddress.properties.street || '';
            document.getElementById("postcode").value = foundAddress.properties.postcode || '';
            document.getElementById("city").value = foundAddress.properties.city || '';
            document.getElementById("state").value = foundAddress.properties.state || '';
            document.getElementById("country").value = foundAddress.properties.country || '';

            document.getElementById("status").textContent = `Found address: ${foundAddress.properties.formatted}`;
        });
}

// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Repositories: Names only \n----------');
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//   });
