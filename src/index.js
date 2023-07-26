import "./styles.css";
import "./leaflet.css";
import L from "./leaflet";
import "./styles.css";

const fetchData = async () => {
    try {
        const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326 "
    const dataResponse = await fetch(url)
    const dataGSON = await dataResponse.json()
    
    initMap(dataGSON)
    } catch (error) {
        console.error("Error fetching or parsing data:", error);
    }
    
};

const initMap = (data) => {
    let map = L.map('map', {
        minZoom: -3
    });
 

    let geoJSON = L.geoJSON(data, {
        weight: 2
    }).addTo(map);

    let osm = L.tilelayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    map.fitBounds(geoJSON.getBounds());
    
}

fetchData();