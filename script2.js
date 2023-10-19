// Create a Leaflet map
const map = L.map('my-map').setView([48.1500327, 11.5753989], 10);
// Marker to save the position of found address
let marker;

const myAPIKey = "ae8fb1509dd84506babaa78221bde1bc";

// Retina displays require different mat tiles quality
const isRetina = L.Browser.retina;
const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

// add Geoapify attribution
map.attributionControl.setPrefix('Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a>')

// Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
  attribution: '<a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
  apiKey: myAPIKey,
  maxZoom: 20,
  id: 'osm-bright',
}).addTo(map);

// move zoom controls to bottom right
map.zoomControl.remove();
L.control.zoom({
  position: 'bottomright'
}).addTo(map);

function geocodeAddress() {
  const address = document.getElementById("address").value;
  if (!address || address.length < 3) {
    document.getElementById("status").textContent = "The address string is too short. Enter at least three symbols";

    return;
  }

	if (marker) {
  	marker.remove();
  }	

  const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

  // call Geocoding API - https://www.geoapify.com/geocoding-api
  fetch(geocodingUrl).then(result => result.json())
    .then(featureCollection => {
      if (featureCollection.features.length === 0) {
        document.getElementById("status").textContent = "The address is not found";
        return;
      }

      const foundAddress = featureCollection.features[0];
      document.getElementById("name").value = foundAddress.properties.name || '';
      document.getElementById("house-number").value = foundAddress.properties.housenumber || '';
      document.getElementById("street").value = foundAddress.properties.street || '';
      document.getElementById("postcode").value = foundAddress.properties.postcode || '';
      document.getElementById("city").value = foundAddress.properties.city || '';
      document.getElementById("state").value = foundAddress.properties.state || '';
      document.getElementById("country").value = foundAddress.properties.country || '';

      document.getElementById("status").textContent = `Found address: ${foundAddress.properties.formatted}`;

	  marker = L.marker(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon)).addTo(map);
	  map.panTo(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon));
    });
}
// function to log user live data
function logUserData(adress) {
  const logList = getElementById("log-list");
  const logEntry = createElement("li");
  const currentTime = new
  Date().toLocaleString();
  logEntry.textcontent = 'Address: $ {address}, Searched at: ${currentTime}';
  logList.appendChild(logEntry);
}
// function to perform geocoding & log user data
function geocodeAddress() {
  const address = document.getElementById("address").value;
  // perform geocoding here

  // log user data
  logUserData(address);


  // finish geocoding here

  // attach geocodeAddress function to the button click event
  document.querySelector("button").addEventListener("click", geocodeAddress);


  

}