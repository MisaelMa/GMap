import '@types/googlemaps';
import '@google/markerclustererplus';
//window.MarkerClusterer = require('@google/markerclustererplus');
declare global {
    interface Window {
        google: typeof google;
        MarkerClusterer: any
    }
}
