
import {Component, Inject, InjectReactive, Prop, Vue, Watch} from 'vue-property-decorator';
import {CreateElement, VNode} from 'vue';
import {GoogleMap, LatLngLiteral} from '@/interfaces/GoogleMaps';
@Component({
    props: {
        animation: {
            type: Number
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
        icon: {
        },
        label: {
        },
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
    @InjectReactive('Map') Map!: GoogleMap;
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
    public  icon!: any;
    @Prop()
    public  label!: any;
    @Prop({
        type: Number,
        default: 1,
    })
    public opacity!: Number;
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
        default:'GMarker'
    })
    public title!: String;

    @Prop({
        type: Number,
    })
    public zIndex!: Number;
    @Prop({
        type: Boolean,
        default: true,
    })
    public visible!: Boolean;

    @Watch('Map')
    public LoadMarker(){
        const myLatlng = new google.maps.LatLng(this.position.lat,this.position.lng);
        const marker = new google.maps.Marker({
            position: myLatlng,
            title: this.title.toString(),
            draggable:true,
        });
        marker.setMap(this.Map);
    }

    render(h: CreateElement): VNode {
        const data = {
            staticClass: 'g-marker',
            ref: 'marker',
        };
        return h('div', data);
    };

}
