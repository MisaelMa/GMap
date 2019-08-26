import _ from 'lodash';
import {GoogleMap} from '@/interfaces/GoogleMaps';
import Vue from 'vue';
import Marker = google.maps.Marker;
import InfoWindow = google.maps.InfoWindow;
export default (vueElement:Vue, googleMapObject: GoogleMap | Marker | InfoWindow, events:any) => {
    _.forEach(events, (eventName:string) => {
        const exposedName = eventName;
        googleMapObject.addListener(eventName, (ev) => {
            vueElement.$emit(exposedName, ev);
        });
    });
};
