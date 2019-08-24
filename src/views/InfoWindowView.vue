<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-btn @click="count++">{{count}}</v-btn>
                <v-sheet style="height: 500px;">

                    <GMap :center="center"
                          zoom-control
                          street-view-control
                          map-type-control
                          scrollwheel
                          fullscreen-control
                    >
                        <template v-slot:map="{map}">
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
                            <GInfoWindow :map="map">
                                <template v-slot:body>
                                    <v-card
                                            class="mx-auto elevation-20"
                                            color="purple"
                                            dark
                                            style="max-width: 410px;"
                                    >
                                        <v-row justify="space-between">
                                            <v-col cols="8">
                                                <v-card-title primary-title>
                                                    <div>
                                                        <div class="headline">Halycon Days</div>
                                                        <div>Ellie Goulding</div>
                                                        <div>(2013)</div>
                                                    </div>
                                                </v-card-title>
                                            </v-col>
                                            <v-img
                                                    class="shrink ma-"
                                                    contain
                                                    height="125px"
                                                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                                                    style="flex-basis: 125px"
                                            ></v-img>
                                        </v-row>
                                        <v-divider dark></v-divider>
                                        <v-card-actions class="pa-4">
                                            Rate this album
                                            <div class="flex-grow-1"></div>
                                            <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
                                            <v-rating
                                                    v-model="rating"
                                                    background-color="white"
                                                    color="yellow accent-4"
                                                    dense
                                                    half-increments
                                                    hover
                                                    size="18"
                                            ></v-rating>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </GInfoWindow>
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

    @Component({
        components: {
            GMap: () => import("@/components/GMap/GMap"),
            GInfoWindow: () => import("@/components/GInfoWindow/GInfoWindow"),
            GMarker: () => import("@/components/GMarker/GMarker"),

        }
    })
    export default class InfoWindowView extends Vue {
        public center: LatLngLiteral = {lat: 19.4284706, lng: -99.1276627};
        public image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
        public animation = google.maps.Animation.BOUNCE;
        public count = 1;
        rating = 4.3;

        public positions: any = [
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
        ];
       public colors: string[] = [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
            ]
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

<style lang="sass">
    .gm-style
        .gm-style-iw
            .gm-style-iw-d
                height: 204px
                width: 412px

</style>
