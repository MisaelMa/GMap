<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="home" >

        {{positions.length}}-->
        {{zoom}}
        {{center}}
        {{MapTypeIda}}
        <v-btn @click="zoom++">
            <v-icon>zoom_in</v-icon>
        </v-btn>
        <v-btn @click="zoom--">
            <v-icon>zoom_out</v-icon>
        </v-btn>
        <GAutocomplete id="a"></GAutocomplete>
        <v-select
                v-model="MapTypeIda"
                :items="MapsTypeIds"
                label="Standard"
        ></v-select>
       <!-- <GMap
                :center="center"
                :heading="100"
                :zoom="zoom"
                :zoom-control="true"
                :tilt="45"
                :disable-double-click-zoom="true"
                draggable
                disableDefaultUI
                rotateControl
                mapTypeControl
                fullscreenControl
                scrollwheel
                clickableIcons
                :mapTypeId="MapTypeIda"
                :street-view-control="true"
                :panControl="true"
                @drag="clickFuntion"
                class="amir"
                style="height: 500px"

        >


        </GMap>-->
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {LatLngLiteral} from "@/interfaces/GoogleMaps";
    import ApiDoc from "@/components/Core/Docs/ApiDoc.vue";
    import GAutocomplete from "@/components/GAutocomplete";
    import {GClusterer} from "@/components/GClusterer";
     /// import {VAutocomplete} from '@/components/GAutocomplete/vuetify/components/VAutocomplete';

    @Component({
        components: {
            ApiDoc,
            GMap: () => import("@/components/GMap/GMap"),
            GInfoWindow: () => import("@/components/GInfoWindow/GInfoWindow"),
            GMarker: () => import("@/components/GMarker/GMarker"),
            GAutocomplete,
            GClusterer,
        },
    })
    export default class Home extends Vue {



        public zoom: number = 5;
        public center: LatLngLiteral = {lat: 45.518, lng: -122.672};
        public MapTypeIda: any = "satellite";
        public MapsTypeIds: any = [
            "hybrid",
            "roadmap",
            "satellite",
            "terrain",
        ];
        public positions: any = [
            {
                title: "Ciudad de México",
                position: {
                    lat: 19.4284706,
                    lng: -99.1276627
                },
            },
            {
                title: "Delegación Iztapalapa",
                position: {
                    lat: 19.3552895,
                    lng: -99.0622406
                },
            },
            {
                title: "Ecatepec",
                position: {
                    lat: 19.6049194,
                    lng: -99.0606384
                },
            },
            {
                title: "Guadalajara",
                position: {
                    lat: 20.6668205,
                    lng: -103.3918228
                },
            },
            {
                title: "Puebla de Zaragoza",
                position: {
                    lat: 19.0379295,
                    lng: -98.2034607
                },
            },
            {
                title: "Ciudad Juárez",
                position: {
                    lat: 31.7202396,
                    lng: -106.4608383
                },
            },
            {
                title: "Tijuana",
                position: {
                    lat: 32.5027008,
                    lng: -99.014831
                },
            },
            {
                title: "Ciudad Neza",
                position: {
                    lat: 19.40061,
                    lng: -99.0148315
                },
            },
            {
                title: "Gustavo A. Madero",
                position: {
                    lat: 19.4939194,
                    lng: -99.1107483
                },
            },
            {
                title: "Monterrey",
                position: {
                    lat: 25.6750698,
                    lng: -100.3184662
                },
            },
            {
                title: "León",
                position: {
                    lat: 21.1290798,
                    lng: -101.6737366
                },
            },
            {
                title: "Mérida",
                position: {
                    lat: 20.9753704,
                    lng: -89.6169586
                },
            },
            {
                title: "San Luis Potosí",
                position: {
                    lat: 22.1498203,
                    lng: -100.9791565,
                },
            },
            {
                title: "Zapopaní",
                position: {
                    lat: 20.7235603,
                    lng: -103.3847885,
                },
            },
            {
                title: "Naucalpan de Juárez",
                position: {
                    lat: 19.4785099,
                    lng: -99.2396317,
                },
            },
            {
                title: "Aguascalientes",
                position: {
                    lat: 21.8823395,
                    lng: -102.2825928,
                },
            },
        ];

        public mounted(){
        }
        public clickFuntion(data: any) {
            console.log(data)
            /*let obj = {
                title: "amir",
                position: {
                    lat: data.latLng.lat(),
                    lng: data.latLng.lng(),
                }
            };
            console.log(obj.position);
            this.center = {
                lat: data.latLng.lat(),
                lng: data.latLng.lng(),
            };*/
            //this.positions.push(obj);
        }

    }
</script>
