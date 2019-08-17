import {Component, InjectReactive, Prop, Vue, Watch} from 'vue-property-decorator';
import {CreateElement, VNode} from 'vue';
import InfoWindow = google.maps.InfoWindow;
import {GoogleMap} from '@/interfaces/GoogleMaps';
import Events from '@/utils/events';
import GmarkerEvents from '@/components/GMarker/gmarker.events';
import IconMouseEvent = google.maps.IconMouseEvent;

// Events

@Component({
    name: 'GInfoWindow',
})
export default class GInfoWindow extends Vue {
    public infoWindow: InfoWindow = <InfoWindow> {};

    @Prop({
        required:true,
    })
    public Map!:GoogleMap;

    public async mounted() {
        //console.log(this.Map)
       this.loader();
    }

    public loader() {
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        //console.log(this.Map)
        /*this.Map.addListener('click', (data: MouseEvent|IconMouseEvent)=> {
            // @ts-ignore
            infowindow.setPosition(data.latLng)
            infowindow.open(this.Map);
            console.log(data)
        });*/

    }

    render(h: CreateElement) {
        const data = {
            staticClass: 'g-msarker',
            ref: 'a',
        };
        return h('div', data);
    };
}
