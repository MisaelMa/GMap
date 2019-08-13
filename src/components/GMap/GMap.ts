// Styles
import './GMap.sass';
// Types
import {Component, Prop, Provide, ProvideReactive, Vue} from 'vue-property-decorator';
import {GoogleMap, LatLngLiteral} from '@/interfaces/GoogleMaps';
// Helpers
import {CreateElement, VNode} from 'vue';
import MapOptions = google.maps.MapOptions;
import Events from '@/utils/events';
//Events Maps
import GmapEvents from '@/components/GMap/gmap.events';

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
        },
        draggable:  {
            type: Boolean,
            required: false,
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
        },
        maxZoom: {
            type: Number,
            required: false,
        },
        minZoom: {
            type: Number,
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
    @ProvideReactive('Map') public Map: GoogleMap = <GoogleMap>{};
    @Prop({
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
    public async mounted() {
       console.log(GmapEvents)
       await this.$GMap._scriptLoadingPromise;
       const options: MapOptions =  { };
       let dat: MapOptions = this.$props;
       for (const prop in dat) {
            if (this.$props[prop]!==undefined) {
                // @ts-ignore
                options[prop] = this.$props[prop]
                console.log(prop+''+this.$props[prop])
            }
       }
        const ref: any = this.$refs;
        const element: Element = ref.gmap;
        this.Map = await new google.maps.Map(element, options);
        Events(this,this.Map,GmapEvents);
        google.maps.event.addListener(this.Map, "zoom_changed", ()=> {
          console.log(this.Map.getZoom())
        })
    }

    public clickMap(data: any){
        console.log(data.latLng.lng())
    }
    render(h: CreateElement): VNode {
        const data = {
            staticClass: 'g-content',
            style: this.style,
            ref: 'gmap',
        };
        return h('div', data, this.$slots.default);
    };
};

