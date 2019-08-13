import _ from 'lodash';
import {GoogleMap} from '@/interfaces/GoogleMaps';
import Vue from 'vue';
export default (vueElement:Vue, googleMapObject:GoogleMap, events:any) => {
    _.forEach(events, (eventName:string) => {
        const exposedName = eventName;
        console.log(eventName)
        googleMapObject.addListener(eventName, (ev) => {
            vueElement.$emit(exposedName, ev);
        });
    });
};
