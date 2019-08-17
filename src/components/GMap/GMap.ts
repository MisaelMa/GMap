// Styles
import './GMap.sass';
// Types
import {Component, Prop, Provide, ProvideReactive, Vue, Watch} from 'vue-property-decorator';
import {GoogleMap, LatLngLiteral} from '@/interfaces/GoogleMaps';
// Helpers
import {CreateElement, VNode, VNodeChildren} from 'vue';
import MapOptions = google.maps.MapOptions;
import Events from '@/utils/events';
//Events Maps
import GmapEvents from '@/components/GMap/gmap.events';

import {getSlot, defaultFilter, FilterFn, camelizeObjectKeys } from '@/utils/helpers';
import MapTypeId = google.maps.MapTypeId;

@Component({
    name: 'GMap',
    props: {
        backgroundColor: {
            type: String,
           // default: '',
            required: false,
        },
        center: {
            // LatLng | LatLngLiteral;
            required: true,
        },
        clickableIcons: {
            type: Boolean,
            required: false,
        },
        controlSize: {
            type: Number,
            required: false,
        },
        disableDefaultUI: {
            type: Boolean,
            required: false,
        },
        disableDoubleClickZoom: {
            type: Boolean,
            required: false,
            default: true,
        },
        draggable:  {
            type: Boolean,
            required: false,
            default: true,
        },
        draggableCursor: {
            type: String,
            required: false,
        },
        draggingCursor: {
            type: String,
            required: false,
        },
        fullscreenControl: {
            type: Boolean,
            required: false,
        },
        fullscreenControlOptions: {
            // FullscreenControlOptions
            required: false,
        },
        gestureHandling: {
            // GestureHandlingOptions;
            required: false,
        },
        heading: {
            type: Number,
            required: false,
        },
        keyboardShortcuts: {
            type: Boolean,
            required: false,
        },
        mapTypeControl: {
            type: Boolean,
            required: false,
        },
        mapTypeControlOptions: {
            // MapTypeControlOptions;
            required: false,
        },
        mapTypeId: {
            // MapTypeId;
            required: false,
            default:'roadmap',
        },
        maxZoom: {
            type: Number,
            required: false,
        },
        minZoom: {
            type: Number,
            required: false,
        },
        options: {
           type: Object,
           required: false,
        },
        noClear: {
            type: Boolean,
            required: false,
        },
        panControl: {
            type: Boolean,
            required: false,
        },
        panControlOptions:{
            // PanControlOptions;
            required: false,
        },
        restriction: {
            // MapRestriction;
            required: false,
        },
        rotateControl: {
            type: Boolean,
            required: false,
        },
        rotateControlOptions: {
            required: false,
            // RotateControlOptions;
        },
        scaleControl: {
            type: Boolean,
            required: false,
        },
        scaleControlOptions: {
            // ScaleControlOptions;
            required: false,
        },
        scrollwheel: {
            type: Boolean,
            required: false,
        },
        streetView: {
            //  StreetViewPanorama;
            required: false,
        },
        streetViewControl: {
            type: Boolean,
            required: false,
        },
        streetViewControlOptions: {
            //  StreetViewControlOptions;
            required: false,
        },
        styles: {
            //  MapTypeStyle[];
            required: false,
        },
        tilt: {
            type: Number,
            required: false,
        },
        zoom: {
            type: Number,
            default:5,
            required: false,
        },
        zoomControl: {
            type: Boolean,
            required: false,
        },
        zoomControlOptions: {
            // ZoomControlOptions
            required: false,
        },
    }
})
export default  class GMap extends Vue {
    // @ProvideReactive('Map')
    public MapObj: GoogleMap = <GoogleMap> {};
    @Prop({
        type:Object,
        required: true,
    })
    public center!: LatLngLiteral;

    get style(): object {
        return {
            position: 'unset',
            overflow: 'visible',
            height: '500px',
        };
    }

    @Watch('center', { immediate: true, deep: true })
    public centerWatch(newCenter: LatLngLiteral,oldCenter: LatLngLiteral): void {
        if (typeof this.MapObj.setCenter === 'function') {
            this.MapObj.setCenter(newCenter);
        }
    }

    @Watch('heading')
    public headingWatch(newHeading: number,oldHeading: number): void {
        if (typeof this.MapObj.setHeading === 'function') {
            this.MapObj.setHeading(newHeading);
        }
    }
    @Watch('mapTypeId')
    public mapTypeIdWatch(newmapTypeId: MapTypeId | string,oldmapTypeId: MapTypeId | string): void {
        if (typeof this.MapObj.setMapTypeId === 'function') {
            this.MapObj.setMapTypeId(newmapTypeId);
        }
    }
    @Watch('options', { immediate: true, deep: true })
    public optionsWatch(newOptions: any ,oldOptions: any): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions(newOptions);
        }
    }
    @Watch('streetView', { immediate: true, deep: true })
    public streetViewWatch(newStreetView: any ,oldStreetView: any): void {
        if (typeof this.MapObj.setStreetView === 'function') {
            this.MapObj.setStreetView(newStreetView);
        }
    }
    @Watch('tilt')
    public tiltWatch(newTilt: number,oldTilt: number): void {
        if (typeof this.MapObj.setTilt === 'function') {
            this.MapObj.setTilt(newTilt);
        }
    }
    @Watch('zoom')
    public zoomWatch(newZoom: number,oldZoom: number): void {
        if (typeof this.MapObj.setZoom === 'function') {
            this.MapObj.setZoom(newZoom);
        }
    }

    public async mounted() {
       await this.$GMap._scriptLoadingPromise;
       const options: MapOptions =  {
           rotateControl: true,
       };
       let dat: MapOptions = this.$props;
       for (const prop in dat) {
            if (this.$props[prop]!==undefined) {
                // @ts-ignore
                options[prop] = this.$props[prop]
                console.log(prop)
            }
       }
        const ref: any = this.$refs;
        const element: Element = ref.gmap;
        this.MapObj = await new google.maps.Map(element, options);

        Events(this,this.MapObj,GmapEvents);
    }


render(h: CreateElement): VNode {
        //this.load();
        const data = {
            staticClass: 'g-content',
            style: this.style,
            ref: 'gmap',

        };
        return h('div',
             data,
            [
                getSlot(this, 'body', {map: this.MapObj},),
                /*this.$scopedSlots.default ?
                    this.$scopedSlots.default.length ? 'scoped' : 'normal' :
                    this.$slots.default ? 'normal' : 'empty',
                ' slot'*/
            ]
            );
    }
}

