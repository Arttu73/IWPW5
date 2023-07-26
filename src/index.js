import "./styles.css";


const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326 "
const dataPromise = await fetch(url);
const dataGSON = await dataPromise.dataGSON();

let map = L.map('map').setView([61.05, 28.1], 100)

let osm = L.tilelayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: -3,
    attribution: '© OpenStreetMap'
}).addTo(map);