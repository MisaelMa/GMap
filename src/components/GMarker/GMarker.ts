// Styles
import './GMarker.sass';
// Types
import {Component, Inject, InjectReactive, Prop, Vue, Watch} from 'vue-property-decorator';
import {GoogleMap, LatLngLiteral} from '@/interfaces/GoogleMaps';
// Helpers
import {CreateElement, VNode} from 'vue';
import MarkerOptions = google.maps.MarkerOptions;
import Events from '@/utils/events';
//Events Maps
import GmarkerEvents from './gmarker.events';
import Point = google.maps.Point;
import StreetViewPanorama = google.maps.StreetViewPanorama;
import ReadonlyMarkerOptions = google.maps.ReadonlyMarkerOptions;
@Component({
    props: {
        animation: {
            type: Number,
            required:true,
        },
        attribution: {
            type: Object
        },
        clickable: {
            type: Boolean,
            default: true
        },
        cursor: {
            type: String,
        },
        draggable: {
            type: Boolean,
            default: false
        },
        icon: {},
        label: {},
        opacity: {
            type: Number,
            default: 1,
        },
        options: {
            type: Object,
        },
        place: {
            type: Object,
        },
        position: {
            type: Object,
        },
        shape: {
            type: Object,
        },
        title: {
            type: String,
        },
        zIndex: {
            type: Number,
        },
        visible: {
            default: true,
        },
    }
})
export default class GMarker extends Vue {
    @InjectReactive('Map')
   /* @Prop({
        type: Object,
    })*/
    public Map!: GoogleMap;

    @Prop({
        type: Object,
    })
    public anchorPoint!: Point;
    @Prop({
        type: Number,
    })
    public animation!: Number;
    @Prop({
        type: Object,
    })
    public attribution!: Object;
    @Prop({
        type: Boolean,
        default: true,
    })
    public clickable!: Boolean;
    @Prop({
        type: String,
    })
    public cursor!: String;
    @Prop({
        type: Boolean,
        default: false,
    })
    public draggable!: Boolean;
    @Prop()
    public icon!: any;
    @Prop()
    public label!: any;
    @Prop({
        type: Number,
        default: 1,
    })
    public opacity!: Number;

    @Prop({
        type: Object ,
    })
    public map!: GoogleMap|StreetViewPanorama;

    @Prop({
        type: Object
    })
    public options!: Object;
    @Prop({
        type: Object,
    })
    public place!: Object;
    @Prop({
        type: Object,
    })
    public position!: LatLngLiteral;
    @Prop({
        type: Object,
    })
    public shape!: Object;

    @Prop({
        type: String,
        default: 'GMarker'
    })
    public title!: String;

    @Prop({
        type: Boolean,
        default: true,
    })
    public visible!: Boolean;
    @Prop({
        type: Number,
    })
    public zIndex!: Number;


    @Watch('Map')
    public async LoadMarker() {
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            await this.loader();
        } else {
            console.log('cargando google maps')
        }
    }

    public async mounted() {
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
           await this.loader();
        } else {
            console.log('cargando google maps')
        }
    }

    public async loader() {
            if (Object.keys(this.map).length !== 0 ) {
                const options: ReadonlyMarkerOptions = await this.$props;
                const marker = await new google.maps.Marker(options);
                Events(this, marker, GmarkerEvents);
            }
    }
    render(h: CreateElement): VNode {
        const data = {
            staticClass: 'g-marker',
            ref: 'marker',
        };
        return h('div', data);
    };

}
