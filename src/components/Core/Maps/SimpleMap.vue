<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-sheet>

    <GMap :center="center"
          map-type-control
          fullscreen-control
          street-view-control
          zoom-control
          :style="[0]"
          style="height: 500px; width: 500px"
    >
        <template v-slot:body>
           <v-btn class="mt-5">
               amir
           </v-btn>
        </template>
    </GMap>
    </v-sheet>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import LatLngLiteral = google.maps.LatLngLiteral;
    import GMap from '@/components/GMap';

    @Component({
        components: {
            GMap
        }
    })
    export default class SimpleMap extends Vue {
        public center: LatLngLiteral = {lat: 45.518, lng: -122.672};
    }
</script>

<style scoped>

</style>
