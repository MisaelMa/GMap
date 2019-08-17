import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {CreateElement, VNode} from 'vue';
import Autocomplete = google.maps.places.Autocomplete;

// Events
import GAutocompleteEvents from '@/components/GAutocomplete/gautocomplete.events';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
    name: 'GAutocomplete',
    props: {
        value: {
            type: String,
            default: undefined,
            required: false,
        },
    },
})
export default class GAutocomplete extends Vue {
    public autocomplete: Autocomplete = <Autocomplete> {};

    public async setupGoogle() {

    }

    public async mounted() {
        try {


        await this.$GMap._scriptLoadingPromise;
        const ref: any = this.$refs;
        const element: HTMLInputElement = ref.gautocomplete;
        this.autocomplete = await new window.google.maps.places.Autocomplete(element, {types: ['geocode']});
        this.autocomplete.addListener('place_changed', ()=> {
                console.log(this.autocomplete.getPlace())
            var service = new google.maps.places.AutocompleteService();
            service.getQueryPredictions({ input: 'Cancun' }, (data: any)=>{
                console.log(data)
                for (const place of data) {
                    var service = new google.maps.places.PlacesService(element)
                    service.getDetails(place,(result: PlaceResult)=>{
                        console.log(result)
                    })
                }

            });

        });
        } catch (e) {
            let msj = e.message + ' Did you add places to libraries when loading Google Maps?';
            alert(msj);
        }

    }

    render(h: CreateElement) {
        const data = {
            staticClass: 'g-marker',
            ref: 'gautocomplete',
        };
        return h('input', data);
    };
}
