import {Component, Vue} from 'vue-property-decorator';


@Component
export default class GMarker extends Vue {

    public mounted() {
        console.log(window)
    }
}
