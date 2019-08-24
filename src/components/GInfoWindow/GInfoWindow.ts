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

@Component({
    name: 'GInfoWindow',
})
export default class GInfoWindow extends Vue {
    public infoWindow: InfoWindow = <InfoWindow> {};

    @Prop({
        required:true,
    })
    public map!:GoogleMap;

    public async mounted() {
        //console.log(this.Map)
       this.loader();
    }

    public loader() {
        var contentString:any = this.$refs.ginfowindo

        this.infoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth:1000,

        });
        Events(this, this.map, GInfoWindowEvents);
        this.map.addListener('click', (data: any)=> {
            // @ts-ignore
            this.infoWindow.setPosition(data.latLng);
            this.infoWindow.open(this.map);
            console.log(data);
        });

    }
    beforeCreate() {
        console.log(' beforeCreate',this.$slots)
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
