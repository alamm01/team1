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


function displayPlace() {

    var apiKey = '3aff5737440b30c8e962f8a23c414db4';
    var cityName = 'Minneapolis'
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    
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
