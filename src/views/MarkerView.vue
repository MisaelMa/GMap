<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid>
        <v-row>
            <!--
            <v-col cols="12">
                <ApiMarker/>
            </v-col>-->
            <v-col cols="12">
                <v-toolbar
                        dense
                        floating
                >
                    <v-text-field
                            v-model="image"
                            hide-details
                            prepend-icon="search"
                            single-line
                    ></v-text-field>

                    <v-btn icon>
                        <v-icon>my_location</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-sheet style="height: 500px;">

                    <GMap :center="center"
                          zoom-control
                          street-view-control
                          map-type-control
                          scrollwheel
                          fullscreen-control
                    >
                        <template v-slot:map="{map}">
                            <v-toolbar
                                    dense
                                    floating
                            >
                                <v-text-field
                                        hide-details
                                        prepend-icon="search"
                                        single-line
                                ></v-text-field>

                                <v-btn icon>
                                    <v-icon>my_location</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <g-marker v-for="position of positions"
                                      :position="position.position"
                                      :title="position.title"
                                      :label="position.title.toString().charAt(1)"
                                      :map="map"
                                      :icon="image"
                                      :animation="position.animation?position.animation:animation"
                                      draggable
                                      @drag="amir"
                                      @click="amir"

                            />
                        </template>

                    </GMap>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import LatLngLiteral = google.maps.LatLngLiteral;

    const GMarker = import("@/components/GMarker/GMarker");
    @Component({
        components: {
            ApiMarker: async () => await import("@/components/Core/Markers/ApiMarker.vue"),
            GMap: () => import("@/components/GMap/GMap"),
            GMarker: () => import("@/components/GMarker/GMarker"),

        }
    })
    export default class MarkerView extends Vue {
        public center: LatLngLiteral = {lat: 19.4284706, lng: -99.1276627};
        public image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        public animation = google.maps.Animation.BOUNCE;
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
                icon: {
                    size: {
                        height: 50,
                        width: 50,
                    },
                    url: "https://www.phoca.cz/images/projects/phoca-maps-r.svg",
                }
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
                animation: google.maps.Animation.DROP,
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

        public icon = {
            scaledSize: {
                height: 50,
                width: 50,
            },
            size: {
                height: 100,
                width: 100,
            },
            url: "https://colorlib.com/wp/wp-content/uploads/sites/2/google-maps-wordpress-plugins.png",
        };

        amir(amir: any) {
            console.log(amir.latLng.lat());
            amir.latLng.lng();
            this.positions.push({
                title: "amir",
                position: {
                    lat: amir.latLng.lat(),
                    lng: amir.latLng.lng(),
                },
            });
        }

        public mounted() {
            // console.log(require('/assets/drawing.svg'))
        }
    }
</script>

<style scoped>

</style>
