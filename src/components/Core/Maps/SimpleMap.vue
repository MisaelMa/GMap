<template>
    <v-sheet>

    <GMap :center="center"
          zoom-control
          street-view-control
          map-type-control
          fullscreen-control
          :style="[0]"
          style="height: 300px; width: 300px"
    >
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
