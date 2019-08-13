<template>
    
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import GMap from "@/components/GMap/GMap";
    import GMarker from "@/components/GMarker";
    import {LatLngLiteral} from '@/interfaces/GoogleMaps';

    @Component({
        components: {
            GMap,
            GMarker,
        },
    })
    export default class Map extends Vue {
        public positions: any = [
            {
                title:'Ciudad de México',
                position: {
                    lat: 19.4284706,
                    lng: -99.1276627
                },
            },
            {
                title:'Delegación Iztapalapa',
                position: {
                    lat: 19.3552895,
                    lng: -99.0622406
                },
            },
            {
                title:'Ecatepec',
                position: {
                    lat: 19.6049194,
                    lng: -99.0606384
                },
            },
            {
                title:'Guadalajara',
                position: {
                    lat: 20.6668205,
                    lng: -103.3918228
                },
            },
            {
                title:'Puebla de Zaragoza',
                position: {
                    lat: 19.0379295,
                    lng: -98.2034607
                },
            },
            {
                title:'Ciudad Juárez',
                position: {
                    lat: 31.7202396,
                    lng: -106.4608383
                },
            },
            {
                title:'Tijuana',
                position: {
                    lat: 32.5027008,
                    lng: -99.014831
                },
            },
            {
                title:'Ciudad Neza',
                position: {
                    lat: 19.40061,
                    lng: -99.0148315
                },
            },
            {
                title:'Gustavo A. Madero',
                position: {
                    lat: 19.4939194,
                    lng: -99.1107483
                },
            },
            {
                title:'Monterrey',
                position: {
                    lat: 25.6750698,
                    lng: -100.3184662
                },
            },
            {
                title:'León',
                position: {
                    lat: 21.1290798,
                    lng: -101.6737366
                },
            },
            {
                title:'Mérida',
                position: {
                    lat: 20.9753704,
                    lng: -89.6169586
                },
            },
            {
                title:'San Luis Potosí',
                position: {
                    lat: 22.1498203,
                    lng: -100.9791565,
                },
            },
            {
                title:'Zapopaní',
                position: {
                    lat: 20.7235603,
                    lng: -103.3847885,
                },
            },
            {
                title:'Naucalpan de Juárez',
                position: {
                    lat: 19.4785099,
                    lng: -99.2396317,
                },
            },
            {
                title:'Aguascalientes',
                position: {
                    lat: 21.8823395,
                    lng: -102.2825928,
                },
            },
        ];
    }
</script>
