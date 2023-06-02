const TILELAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILELAYER_ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const ZOOM = 20;
const OUR_ADDRESS = {
  lat: 59.968322,
  lng: 30.317359,
};

const map = L.map('map-canvas', { scrollWheelZoom: false });
const mapImage = document.querySelector('.map__image');
const mainPinIcon = L.icon({
  iconUrl: './img/svg/leaflet-map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainMarker = L.marker(
  OUR_ADDRESS,
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

const executeMap = () => {
  map.setView(OUR_ADDRESS, ZOOM);
  mainMarker.addTo(map);
  L.tileLayer(TILELAYER_URL, {
    attribution: TILELAYER_ATTRIBUTION
  }).addTo(map);
  mapImage.classList.add('map__image--js');
};

export { executeMap };
