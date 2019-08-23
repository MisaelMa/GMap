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

import {getSlot, defaultFilter, FilterFn, camelizeObjectKeys} from '@/utils/helpers';
import MapTypeId = google.maps.MapTypeId;
import FullscreenControlOptions = google.maps.FullscreenControlOptions;
import GestureHandlingOptions = google.maps.GestureHandlingOptions;
import MapTypeControlOptions = google.maps.MapTypeControlOptions;
import PanControlOptions = google.maps.PanControlOptions;
import MapRestriction = google.maps.MapRestriction;
import RotateControlOptions = google.maps.RotateControlOptions;
import ScaleControlOptions = google.maps.ScaleControlOptions;
import StreetViewControlOptions = google.maps.StreetViewControlOptions;
import MapTypeStyle = google.maps.MapTypeStyle;
import ZoomControlOptions = google.maps.ZoomControlOptions;

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
        draggable: {
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
            type: Object,
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
            type: Object,
            // MapTypeControlOptions;
            required: false,
        },
        mapTypeId: {
            // MapTypeId;
            required: false,
            default: 'roadmap',
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
        panControlOptions: {
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
            default: 5,
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
    },
})
export default class GMap extends Vue {
    @ProvideReactive('Map')
    public MapObj: GoogleMap = <GoogleMap> {};

    @Prop({
        type: Object,
        required: true,
    })
    public center!: LatLngLiteral;

    //37 props // 36 watch just need  backgroundColor watch
    @Watch('center', {immediate: true, deep: true})
    public centerWatch(newCenter: LatLngLiteral, oldCenter: LatLngLiteral): void {
        if (typeof this.MapObj.setCenter === 'function') {
            this.MapObj.setCenter(newCenter);
        }
    }

    @Watch('clickableIcons')
    public clickableIconsWatch(newClickableIcons: boolean, oldClickableIcons: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                clickableIcons: newClickableIcons,
            });
        }
    }

    @Watch('controlSize')
    public controlSizeWatch(newControlSize: number): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                controlSize: newControlSize,
            });
        }
    }

    @Watch('disableDefaultUI')
    public disableDefaultUIWatch(newdisableDefaultUI: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                disableDefaultUI: newdisableDefaultUI,
            });
        }
    }

    @Watch('disableDoubleClickZoom')
    public disableDoubleClickZoomWatch(newdisableDoubleClickZoom: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                disableDoubleClickZoom: newdisableDoubleClickZoom,
            });
        }
    }

    @Watch('draggable')
    public draggableWatch(newdraggable: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                draggable: newdraggable,
            });
        }
    }

    @Watch('draggableCursor')
    public draggableCursorWatch(newdraggableCursor: string): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                draggableCursor: newdraggableCursor,
            });
        }
    }

    @Watch('draggingCursor')
    public draggingCursorWatch(newddraggingCursor: string): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                draggingCursor: newddraggingCursor,
            });
        }
    }

    @Watch('fullscreenControl')
    public fullscreenControlWatch(newFullscreenControl: boolean, oldFullscreenControl: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                fullscreenControl: newFullscreenControl,
            });
        }
    }

    @Watch('fullscreenControlOptions', {immediate: true, deep: true})
    public fullscreenControlOptionsWatch(newfullscreenControlOptions: FullscreenControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                fullscreenControlOptions: newfullscreenControlOptions,
            });
        }
    }

    @Watch('gestureHandling', {immediate: true, deep: true})
    public gestureHandlingWatch(newgestureHandling: GestureHandlingOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                gestureHandling: newgestureHandling,
            });
        }
    }

    @Watch('heading')
    public headingWatch(newHeading: number, oldHeading: number): void {
        if (typeof this.MapObj.setHeading === 'function') {
            this.MapObj.setHeading(newHeading);
        }
    }

    @Watch('keyboardShortcuts')
    public keyboardShortcutsWatch(newkeyboardShortcuts: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                keyboardShortcuts: newkeyboardShortcuts,
            });
        }
    }

    @Watch('mapTypeControl')
    public mapTypeControlWatch(newmapTypeControl: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                mapTypeControl: newmapTypeControl,
            });
        }
    }

    @Watch('mapTypeControlOptions', {immediate: true, deep: true})
    public mapTypeControlOptionsWatch(newmapTypeControlOptions: MapTypeControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                mapTypeControlOptions: newmapTypeControlOptions,
            });
        }
    }

    @Watch('mapTypeId')
    public mapTypeIdWatch(newmapTypeId: MapTypeId | string, oldmapTypeId: MapTypeId | string): void {
        if (typeof this.MapObj.setMapTypeId === 'function') {
            this.MapObj.setMapTypeId(newmapTypeId);
        }
    }

    @Watch('maxZoom')
    public maxZoomWatch(newmaxZoom: number): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                maxZoom: newmaxZoom
            });
        }
    }

    @Watch('minZoom')
    public minZoomWatch(newminZoom: number): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                minZoom: newminZoom
            });
        }
    }

    @Watch('options', {immediate: true, deep: true})
    public optionsWatch(newOptions: any, oldOptions: any): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions(newOptions);
        }
    }

    @Watch('noClear')
    public noClearWatch(newnoClear: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                noClear: newnoClear,
            });
        }
    }

    @Watch('panControl')
    public panControlWatch(newpanControl: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                panControl: newpanControl,
            });
        }
    }

    @Watch('panControlOptions', {immediate: true, deep: true})
    public panControlOptionsWatch(newpanControlOptions: PanControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                panControlOptions: newpanControlOptions,
            });
        }
    }

    @Watch('restriction', {immediate: true, deep: true})
    public restrictionWatch(newrestriction: MapRestriction): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                restriction: newrestriction,
            });
        }
    }

    @Watch('rotateControl')
    public rotateControlWatch(newrotateControl: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                rotateControl: newrotateControl,
            });
        }
    }

    @Watch('rotateControlOptions', {immediate: true, deep: true})
    public rotateControlOptionsWatch(newrotateControlOptions: RotateControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                rotateControlOptions: newrotateControlOptions,
            });
        }
    }

    @Watch('scaleControl')
    public scaleControlWatch(newscaleControl: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                scaleControl: newscaleControl,
            });
        }
    }

    @Watch('scaleControlOptions', {immediate: true, deep: true})
    public scaleControlOptionsWatch(newscaleControlOptions: ScaleControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                scaleControlOptions: newscaleControlOptions
            });
        }
    }

    @Watch('scrollwheel')
    public scrollwheelWatch(newscrollwheel: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                scrollwheel: newscrollwheel,
            });
        }
    }

    @Watch('streetView', {immediate: true, deep: true})
    public streetViewWatch(newStreetView: any, oldStreetView: any): void {
        if (typeof this.MapObj.setStreetView === 'function') {
            this.MapObj.setStreetView(newStreetView);
        }
    }

    @Watch('streetViewControl')
    public streetViewControlWatch(newstreetViewControl: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                streetViewControl: newstreetViewControl,
            });
        }
    }

    @Watch('streetViewControlOptions', {immediate: true, deep: true})
    public streetViewControlOptionsWatch(newstreetViewControlOptions: StreetViewControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                streetViewControlOptions: newstreetViewControlOptions
            });
        }
    }

    @Watch('styles', {immediate: true, deep: true})
    public stylesWatch(newstyles: MapTypeStyle[]): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                styles: newstyles,
            });
        }
    }

    @Watch('tilt')
    public tiltWatch(newTilt: number, oldTilt: number): void {
        if (typeof this.MapObj.setTilt === 'function') {
            this.MapObj.setTilt(newTilt);
        }
    }

    @Watch('zoom')
    public zoomWatch(newZoom: number, oldZoom: number): void {
        if (typeof this.MapObj.setZoom === 'function') {
            this.MapObj.setZoom(newZoom);
        }
    }

    @Watch('zoomControl')
    public zoomControlWatch(newZoom: boolean, oldZoom: boolean): void {
        if (typeof this.MapObj.setOptions === 'function') {
            this.MapObj.setOptions({
                zoomControl: newZoom,
            });
        }
    }

    @Watch('zoomControlOptions', {immediate: true, deep: true})
    public zoomControlOptionsWatch(newzoomControlOptions: ZoomControlOptions): void {
        if (typeof this.MapObj.setOptions === 'function') {
            console.log(newzoomControlOptions);
            this.MapObj.setOptions({
                zoomControlOptions: newzoomControlOptions,
            });
        }
    }

    public async mounted() {
        await this.$GMap._scriptLoadingPromise;
        const options: MapOptions = {};
        const dat: MapOptions = this.$props;
        for (const prop in dat) {
            if (this.$props[prop] !== undefined) {
                // @ts-ignore
                options[prop] = this.$props[prop];
                // console.log(prop)
            }
        }
        const ref: any = this.$refs;
        const element: Element = ref.gmap;
        this.MapObj = await new google.maps.Map(element, options);
        await Events(this, this.MapObj, GmapEvents);
    }


    public render(h: CreateElement): VNode {
        // this.load();
        const data = {
            staticClass: 'g-content',
            ref: 'gmap',
        };
       return  h('div',
            data,
            [
                getSlot(this, 'map', {map: this.MapObj}),
                /*this.$scopedSlots.default ?
                    this.$scopedSlots.default.length ? 'scoped' : 'normal' :
                    this.$slots.default ? 'normal' : 'empty',
                ' slot'*/
            ],
        );
    }
}

