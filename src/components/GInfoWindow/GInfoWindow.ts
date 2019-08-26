// Styles
import './GInfoWindow.sass';
//types
import {Component, InjectReactive, Prop, Vue, Watch} from 'vue-property-decorator';
import {CreateElement, VNode} from 'vue';
import InfoWindow = google.maps.InfoWindow;
import {GoogleMap} from '@/interfaces/GoogleMaps';
import IconMouseEvent = google.maps.IconMouseEvent;
import GInfoWindowEvents from '@/components/GInfoWindow/ginfowindow.events';
// Events
import Events from '@/utils/events';
import {getSlot} from '@/utils/helpers';
import Size = google.maps.Size;
import LatLngLiteral = google.maps.LatLngLiteral;
import LatLng = google.maps.LatLng;
import InfoWindowOptions = google.maps.InfoWindowOptions;

@Component({
    name: 'GInfoWindow',
})
export default class GInfoWindow extends Vue {
    public infoWindow: InfoWindow = <InfoWindow> {};

    @Prop({
        required: true,
    })
    public value!: boolean;
    @Prop({
        required: true,
    })
    public map!: GoogleMap;

    @Prop()
    public content!: string|Node ;

    @Prop()
    public disableAutoPan!: boolean;

    @Prop({
        type: Number,
    })
    public maxWidth!: number;

    @Prop()
    public pixelOffset!: Size ;

    @Prop()
    public position!: LatLng|LatLngLiteral;

    @Prop({
        type: Number,
    })
    public zIndex!: number;


    @Watch('value')
    public valueWatch(newvalue: boolean) {
       // console.log(newvalue);
        if (newvalue) {
            if (typeof this.infoWindow.open === 'function') {
                this.infoWindow.open(this.map);
            }
        } else {
            if (typeof this.infoWindow.close === 'function') {
                this.infoWindow.close();
                this.$emit('closeclick');
            }
        }
    }


    @Watch('map')
    public mapWatch(newMap: GoogleMap) {
        console.log('google')
       // this.infoWindow.se
    }

    @Watch('content')
    public contentWatch(newcontent: string|Node ) {
        if (typeof this.infoWindow.setContent === 'function') {
            this.infoWindow.setContent(newcontent);
        }
    }
    @Watch('disableAutoPan')
    public disableAutoPanWatch(newdisableAutoPan: boolean) {
        if (typeof this.infoWindow.setOptions === 'function') {
            this.infoWindow.setOptions({
                disableAutoPan: newdisableAutoPan,
            });
        }
    }
    @Watch('maxWidth')
    public maxWidthWatch(newmaxWidth: number) {
        if (typeof this.infoWindow.setOptions === 'function') {
           this.infoWindow.setOptions({
                maxWidth: newmaxWidth,
           });
        }
    }
    @Watch('pixelOffset', { immediate: true, deep: true})
    public pixelOffsetWatch(newpixelOffset: Size) {
        if (typeof this.infoWindow.setOptions === 'function') {
            this.infoWindow.setOptions({
                pixelOffset: newpixelOffset,
            });
        }
    }
    @Watch('position', { immediate: true, deep: true})
    public positionWatch(newposition: LatLng|LatLngLiteral ) {
        if (typeof this.infoWindow.setPosition === 'function') {
            this.infoWindow.setPosition(newposition);
        }
    }
    @Watch('zIndex')
    public zIndexWatch(newzIndex: number) {
        if (typeof this.infoWindow.setZIndex === 'function') {
            this.infoWindow.setZIndex(newzIndex);
        }
    }


    public async mounted() {
        //console.log(this.Map)
      await  this.loader();
    }

    public async loader() {

        const options: InfoWindowOptions = {};
        let dat: InfoWindowOptions = this.$props;
        for (const prop in dat) {
            if (prop.toString() !== 'value' && prop.toString() !== 'map') {
                 if (this.$props[prop] !== undefined) {
                    // @ts-ignore
                    options[prop] = this.$props[prop];
                }
            }
        }
        const ref: any = this.$refs;
        options.content = ref.ginfowindo;
        this.infoWindow = new google.maps.InfoWindow(options);
        Events(this, this.infoWindow, GInfoWindowEvents);

    }
    beforeCreate() {
        console.log(' beforeCreate', this.$slots);
    }
    render(h: CreateElement) {
        const data = {
            staticClass: 'g-infowindo',
            style:'position: relative!important; float: left;',
            ref: 'ginfowindo',
        };
        return h('div', data,
            [
                getSlot(this, 'body'),
                /*this.$scopedSlots.default ?
                    this.$scopedSlots.default.length ? 'scoped' : 'normal' :
                    this.$slots.default ? 'normal' : 'empty',
                ' slot'*/
            ]);
    };
}
