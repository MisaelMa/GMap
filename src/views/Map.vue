<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <ApiMap/>
            </v-col>
            <v-col cols="12">
                <SimpleMap/>
            </v-col>
            <v-col cols="12">
                <MapControls/>
            </v-col>
            <v-col cols="12">
                <StylesMap/>
            </v-col>
        </v-row>


    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {LatLngLiteral} from '@/interfaces/GoogleMaps';
    import ApiMap from '@/components/Core/Maps/ApiMap.vue';
    import SimpleMap from '@/components/Core/Maps/SimpleMap.vue';
    import MapControls from '@/components/Core/Maps/MapControls.vue';
    import StylesMap from '@/components/Core/Maps/StylesMap.vue';

    @Component({
        components: {
            ApiMap,
            SimpleMap,
            MapControls,
            StylesMap,

        },
    })
    export default class Map extends Vue {

        public zoomControl: boolean= true;

        public center: LatLngLiteral = {lat: 45.518, lng: -122.672};

    }
</script>
