mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VpdGhoZXRyaWNrIiwiYSI6ImNsOTdsdDlxNjJ5dDEzb25ueXh2cXE3OWUifQ.6RX4hs7R2PxiIlqNXFGbtg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: "globe", // display the map as a 3D globe
    center: center,
    zoom: 15,
  });
  map.on("style.load", () => {
    map.setFog({}); // Set the default atmosphere style
  });
  map.addControl(new mapboxgl.NavigationControl());

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2VpdGhoZXRyaWNrIiwiYSI6ImNsOTdsdDlxNjJ5dDEzb25ueXh2cXE3OWUifQ.6RX4hs7R2PxiIlqNXFGbtg";

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}
