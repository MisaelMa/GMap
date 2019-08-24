// Styles
import './GMarker.sass';
// Types
import {Component, Inject, InjectReactive, Prop, Vue, Watch} from 'vue-property-decorator';
import {GoogleMap, GoogleMarker, LatLngLiteral} from '@/interfaces/GoogleMaps';
// Helpers
import {CreateElement, VNode} from 'vue';
import MarkerOptions = google.maps.MarkerOptions;
import Events from '@/utils/events';
//Events Maps
import GmarkerEvents from './gmarker.events';
import Point = google.maps.Point;
import StreetViewPanorama = google.maps.StreetViewPanorama;
import ReadonlyMarkerOptions = google.maps.ReadonlyMarkerOptions;
import Place = google.maps.Place;
import MarkerShape = google.maps.MarkerShape;

@Component({
    props: {
        animation: {
            type: Number,
            required: true,
        },
        clickable: {
            type: Boolean,
            default: true,
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
    /*@InjectReactive('Map')
    public Map!: GoogleMap;*/
    public marker: GoogleMarker = <GoogleMarker> {};
    @Prop({
        type: Object,
    })
    public anchorPoint!: Point;
    @Prop({
        type: Number,
    })
    public animation!: Number;
    @Prop({
        type: Boolean,
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
        type: Object,
    })
    public map!: GoogleMap | StreetViewPanorama;

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

    /*=============================================*/
    @Watch('anchorPoint', {immediate: true, deep: true})
    public async anchorPointWatch(newanchorPoint: Point) {
        if (typeof this.marker.setOptions === 'function') {
            this.marker.setOptions({
                anchorPoint: newanchorPoint,
            });
        }
    }

    @Watch('animation')
    public async animationWatch(newanimation: number) {
        if (typeof this.marker.setAnimation === 'function') {
            this.marker.setAnimation(newanimation);
        }
    }

    @Watch('clickable')
    public async clickableWatch(newclickable: boolean) {
        if (typeof this.marker.setClickable === 'function') {
            this.marker.setClickable(newclickable);
        }
    }

    @Watch('cursor')
    public async cursorWatch(newcursor: string) {
        if (typeof this.marker.setCursor === 'function') {
            this.marker.setCursor(newcursor);
        }
    }

    @Watch('draggable')
    public async draggableWatch(newdraggable: boolean) {
        if (typeof this.marker.setDraggable === 'function') {
            this.marker.setDraggable(newdraggable);
        }
    }

    @Watch('icon', {immediate: true, deep: true})
    public async iconWatch(newicon: any) {
        if (typeof this.marker.setIcon === 'function') {
            this.marker.setIcon(newicon);
        }
    }

    @Watch('label', {immediate: true, deep: true})
    public async labelWatch(newlabel: any) {
        if (typeof this.marker.setLabel === 'function') {
            this.marker.setLabel(newlabel);
        }
    }

    @Watch('opacity')
    public async opacityWatch(newopacity: number) {
        if (typeof this.marker.setOpacity === 'function') {
            this.marker.setOpacity(newopacity);
        }
    }

    @Watch('map')
    public async LoadMarker(newMap: GoogleMap | StreetViewPanorama) {
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            await this.loader();
        } else {
            console.log('cargando google maps');
        }
    }

    @Watch('options', {immediate: true, deep: true})
    public async optionsWatch(newOption: ReadonlyMarkerOptions) {
        if (typeof this.marker.setOptions === 'function') {
            this.marker.setOptions(newOption);
        }
    }

    @Watch('place', {immediate: true, deep: true})
    public async placeWatch(newplace: Place) {
        if (typeof this.marker.setOptions === 'function') {
            this.marker.setOptions({
                place: newplace
            });
        }
    }

    @Watch('position', {immediate: true, deep: true})
    public async positionWatch(newposition: LatLngLiteral) {
        if (typeof this.marker.setPosition === 'function') {
            this.marker.setPosition(newposition);
        }
    }

    @Watch('shape', {immediate: true, deep: true})
    public async shapeWatch(newshape: MarkerShape | null) {
        if (typeof this.marker.setShape === 'function') {
            this.marker.setShape(newshape);
        }
    }

    @Watch('title')
    public async titleWatch(newtitle: string) {
        if (typeof this.marker.setTitle === 'function') {
            this.marker.setTitle(newtitle);
        }
    }

    @Watch('visible')
    public async visibleWatch(newvisible: boolean) {
        if (typeof this.marker.setVisible === 'function') {
            this.marker.setVisible(newvisible);
        }
    }

    @Watch('zIndex')
    public async zIndexWatch(newzIndex: number) {
        if (typeof this.marker.setZIndex === 'function') {
            this.marker.setZIndex(newzIndex);
        }
    }

    public async mounted() {
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            await this.loader();
        } else {
            console.log('cargando google maps');
        }
    }

    public async loader() {
        if (Object.keys(this.map).length !== 0) {
            const options: ReadonlyMarkerOptions = await this.$props;
            this.marker = await new google.maps.Marker(options);
            Events(this, this.marker, GmarkerEvents);
        }
    }

    render(h: CreateElement): VNode {
        const data = {
            staticClass: 'g-marker',
            ref: 'g-marker',
        };
        return h('div', data);
    };

}
