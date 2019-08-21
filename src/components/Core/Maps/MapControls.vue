import {ControlPosition} from "googlemaps";
<template>
    <v-row >
        <v-col cols="12" md="6">
            <v-card color="basil">
                <v-expansion-panels accordion  >
                    <v-expansion-panel :readonly="!zoomControl" >
                        <v-expansion-panel-header disable-icon-rotate>
                             <v-checkbox v-model="zoomControl"
                                         label="Zoom"
                                             class="mt-0 mb-0 pt-0"
                                             style="width: 10px; height: 20px"/>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-select v-model="zoomControlOptions.position"
                                      :items="positions" label="Position" />
                            <v-select v-model="zoomControlOptions.style"
                                      :items="itemStyleZoom" label="Style" disabled/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel :readonly="!MapType" >
                        <v-expansion-panel-header>
                            <v-checkbox v-model="MapType"
                                        label="MapType"
                                        class="mt-0 mb-0 pt-0"
                                        style="width: 10px; height: 20px"/>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-select v-model="MapTypeOptions.position"
                                      :items="positions" label="Position"/>
                            <v-select
                                    v-model="MapTypeOptions.mapTypeIds"
                                    :items="itemMapTypeId"
                                    :menu-props="{ maxHeight: '400' }"
                                    label="MapTypes"
                                    multiple
                                    persistent-hint
                            />
                            <v-select v-model="MapTypeOptions.style"
                                      :items="itemMapTypeStyle" label="Style"/>


                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel :readonly="!StreetView" >
                        <v-expansion-panel-header>
                            <v-checkbox v-model="StreetView"
                                        label="StreetView"
                                        class="mt-0 mb-0 pt-0"
                                        style="width: 10px; height: 20px"/>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-select v-model="StreetViewControlOptions.position"
                                      :items="positions" label="Position"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel  :readonly="!Rotate" >
                        <v-expansion-panel-header>
                            <v-checkbox v-model="Rotate"
                                        label="Rotate"
                                        class="mt-0 mb-0 pt-0"
                                        style="width: 10px; height: 20px"/>

                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                               <v-select v-model="rotateControlOptions.position"
                                      :items="positions" label="Position"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel :readonly="!Scale" >
                        <v-expansion-panel-header disabled hide-actions expand-icon>
                            <v-checkbox v-model="Scale"
                                        label="Scale"
                                        class="mt-0 mb-0 pt-0"
                                        style="width: 10px; height: 20px"/>
                        </v-expansion-panel-header>
                    </v-expansion-panel>
                    <v-expansion-panel :readonly="!Fullscreen" >
                        <v-expansion-panel-header>
                            <v-checkbox v-model="Fullscreen"
                                        label="Fullscreen"
                                        class="mt-0 mb-0 pt-0"
                                        style="width: 10px; height: 20px"/>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-select v-model="fullscreenControlOptions.position"
                                      :items="positions" label="Position"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
        </v-col>
        <v-col cols="12"  sm="12" md="6" >

                <v-sheet style="height: 438px">
                    <GMap :center="center"
                          :zoom="18"
                           mapTypeId="satellite"

                          :zoom-control="zoomControl"
                          :zoom-control-options="zoomControlOptions"
                          :map-type-control="MapType"
                          :map-type-control-options="MapTypeOptions"
                          :street-view-control="StreetView"
                          :street-view-control-options="StreetViewControlOptions"
                          :rotate-control="Rotate"
                          :rotate-control-options="rotateControlOptions"
                          :scale-control="Scale"
                          :fullscreenControl="Fullscreen"
                          :fullscreen-control-options="fullscreenControlOptions"
                          style="height: 100%; width: 100%"

                    >
                    </GMap>
                </v-sheet>
            <!--
           -->

        </v-col>

    </v-row>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import GMap from "@/components/GMap";
    import LatLngLiteral = google.maps.LatLngLiteral;
    import ZoomControlOptions = google.maps.ZoomControlOptions;
    import ControlPosition = google.maps.ControlPosition;
    import ZoomControlStyle = google.maps.ZoomControlStyle;
    import MapTypeControlOptions = google.maps.MapTypeControlOptions;
    import MapTypeControlStyle = google.maps.MapTypeControlStyle;
    import MapTypeId = google.maps.MapTypeId;
    import StreetViewControlOptions = google.maps.StreetViewControlOptions;
    import RotateControlOptions = google.maps.RotateControlOptions;
    import FullscreenControlOptions = google.maps.FullscreenControlOptions;

    @Component({
        components: {
            GMap,
        }
    })
    export default class MapControls extends Vue {
        public positions: any[] | string[] = Object.keys(ControlPosition).map((index: any) => {
            return {
                value: ControlPosition[index] ,
                text: index
            };
        });
        public itemStyleZoom: any[] = Object.keys(ZoomControlStyle).map((index: any) => {
            return {
                    value: ZoomControlStyle[index] ,
                    text: index
            };
        });

        public itemMapTypeId: any[] = Object.keys(MapTypeId).map((index: any) => {
            return index.toString().toLowerCase()

        });

        public itemMapTypeStyle: any[] = Object.keys(MapTypeControlStyle).map((index: any) => {
            return {
                value: MapTypeControlStyle[index] ,
                text: index
            };
        });

        public zoomControl: boolean = true;
        public zoomControlOptions: ZoomControlOptions = {
            position: ControlPosition.BOTTOM_CENTER,
            style: google.maps.ZoomControlStyle.LARGE
        };

        public MapType: boolean = true;
        public MapTypeOptions: MapTypeControlOptions = {
            mapTypeIds: ['satellite','roadmap','terrain'],
            position: ControlPosition.TOP_LEFT,
            style: MapTypeControlStyle.DEFAULT,
        };
        public StreetView: boolean = true;
        public StreetViewControlOptions: StreetViewControlOptions = {
            position:ControlPosition.RIGHT_BOTTOM,
        };
        public Rotate: boolean = true;
        public rotateControlOptions: RotateControlOptions = {
            position:ControlPosition.LEFT_BOTTOM
        };
        public Scale: boolean = true;
        public Fullscreen: boolean = true;
        public fullscreenControlOptions: FullscreenControlOptions = {
            position: ControlPosition.RIGHT_TOP
        };
        public center: LatLngLiteral = {lat: 36.964, lng: -122.015}

        public mounted(){
            //console.log(google.maps.ScaleControlStyle)
        }

    }
</script>

<style scoped>

</style>
