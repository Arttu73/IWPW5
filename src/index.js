
import "./styles.css";

const fetchData = async () => {
    const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326 "
    const dataResponse = await fetch(url)
    const dataGSON = await dataResponse.json()

    initMap(dataGSON)
};

const initMap = (data) => {
    let map = L.map('map')

    let geoJSON = L.geoJSON(data, {
        weight: 2
    }).addTo(map);

    let osm = L.tilelayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: -3,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    map.fitBounds(geoJSON.getBounds())
}

fetchData();