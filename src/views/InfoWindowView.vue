<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-btn @click="count++">{{count}}</v-btn>
                <v-switch v-model="stateIW" :label="`Switch 1: ${stateIW.toString()}`"></v-switch>

                <v-sheet style="height: 500px;">

                    <GMap :center="center"
                          zoom-control
                          street-view-control
                          map-type-control
                          scrollwheel
                          fullscreen-control
                          @click="amir"
                    >
                        <template v-slot:map="{map}">
                            <g-marker v-for="position of positions"
                                      :position="position.position"
                                      :title="position.title"
                                      :label="position.title.toString().charAt(1)"
                                      :map="map"
                                      :icon="image"
                                      draggable
                                      @drag="amir"


                            />
                            <GInfoWindow v-model="stateIW"
                                         :map="map"
                                         :position="center"
                                         @closeclick="close()"
                            >
                                <template v-slot:body>
                                    <v-card>
                                        <v-toolbar color="light-blue" light extended>
                                            <v-app-bar-nav-icon></v-app-bar-nav-icon>
                                            <v-toolbar-title class="white--text">My files</v-toolbar-title>
                                            <div class="flex-grow-1"></div>
                                            <v-btn icon>
                                                <v-icon>search</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>view_module</v-icon>
                                            </v-btn>
                                            <template v-slot:extension>
                                                <v-btn
                                                        fab
                                                        color="cyan accent-2"
                                                        bottom
                                                        left
                                                        absolute
                                                        @click="dialog = !dialog"
                                                >
                                                    <v-icon>add</v-icon>
                                                </v-btn>
                                            </template>
                                        </v-toolbar>
                                        <v-list two-line subheader>
                                            <v-subheader inset>Folders</v-subheader>
                                            <v-list-item v-for="item in items" :key="item.title" @click="">
                                                <v-list-item-avatar>
                                                    <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <v-btn icon>
                                                        <v-icon color="grey lighten-1">info</v-icon>
                                                    </v-btn>
                                                </v-list-item-action>
                                            </v-list-item>
                                            <v-divider inset></v-divider>
                                            <v-subheader inset>Files</v-subheader>
                                            <v-list-item v-for="item in items2" :key="item.title" @click="">
                                                <v-list-item-avatar>
                                                    <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <v-btn icon ripple>
                                                        <v-icon color="grey lighten-1">info</v-icon>
                                                    </v-btn>
                                                </v-list-item-action>
                                            </v-list-item>
                                        </v-list>
                                        <v-dialog v-model="dialog" max-width="500px">
                                            <v-card>
                                                <v-card-text>
                                                    <v-text-field label="File name"></v-text-field>
                                                    <small class="grey--text">* This doesn't actually save.</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <div class="flex-grow-1"></div>
                                                    <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
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
        // public animation = google.maps.Animation.BOUNCE;
        public count = 1;
        rating = 4.3;
        public stateIW: boolean = false;
        dialog: boolean = false;
        items: any = [
            {icon: "folder", iconClass: "grey lighten-1 white--text", title: "Photos", subtitle: "Jan 9, 2014"},
            {icon: "folder", iconClass: "grey lighten-1 white--text", title: "Recipes", subtitle: "Jan 17, 2014"},
            {icon: "folder", iconClass: "grey lighten-1 white--text", title: "Work", subtitle: "Jan 28, 2014"},
        ];
        items2: any = [
            {icon: "assignment", iconClass: "blue white--text", title: "Vacation itinerary", subtitle: "Jan 20, 2014"},
            {
                icon: "call_to_action",
                iconClass: "amber white--text",
                title: "Kitchen remodel",
                subtitle: "Jan 10, 2014"
            },
        ];

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
            "primary",
            "secondary",
            "yellow darken-2",
            "red",
            "orange",
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
            //console.log(amir.latLng.lat());
            /*amir.latLng.lng();
            this.positions.push({
                title: "amir",
                position: {
                    lat: amir.latLng.lat(),
                    lng: amir.latLng.lng(),
                },
            });*/
            this.center =  {
                lat: amir.latLng.lat(),
                lng: amir.latLng.lng(),
            };
            this.stateIW = true;
        }

        public close() {
            console.log('cerradp')
            // console.log(require('/assets/drawing.svg'))
        }
    }
</script>

<style lang="scss">
    /*
       .gm-style{
           .gm-style-iw{
               .gm-style-iw-d{
                    height: 204px;
                    width: 412px;
               }

           }
       }*/
</style>
