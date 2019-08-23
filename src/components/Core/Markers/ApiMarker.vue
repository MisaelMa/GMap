<template>
    <div>
        <a href="#api" class="mr-2 d-inline-flex core-goto text--primary core-goto--heading tag-H2 mb-2">
            <div class="layout align-center"><div class="markdown"><h2>API</h2>
            </div><!----></div></a>
        <ApiDoc :doc="DocMarker"/>
        <br>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import ApiDoc from '@/components/Core/Docs/ApiDoc.vue';

    @Component({
        components: {
            ApiDoc,
        }
    })
    export default class ApiMarker extends Vue {
        public DocMarker: any = {
            name: "GMarker",
            props: [
                {
                    name: "anchorPoint",
                    type: `<a href="https://developers.google.com/maps/documentation/javascript/reference/coordinates#Point">Point</a>`,
                    default: "undefined",
                    description: `The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.`,
                },
                {
                    name: "animation",
                    type: `<a href="https://developers.google.com/maps/documentation/javascript/reference/marker#Animation">Animation</a>`,
                    default: "undefined",
                    description: `Which animation to play when marker is added to a map.`,
                },
                {
                    name: "clickable",
                    type: 'boolean',
                    default: "undefined",
                    description: `If true, the marker receives mouse and touch events. Default value is true.`,
                },
                {
                    name: "crossOnDrag",
                    type: 'boolean',
                    default: "undefined",
                    description: `If false, disables cross that appears beneath the marker when dragging. This option is <strong>true</strong> by default.`,
                },
                {
                    name: "cursor",
                    type: 'string',
                    default: "undefined",
                    description: `Mouse cursor to show on hover`,
                },
                {
                    name: "draggable",
                    type: 'boolean',
                    default: "undefined",
                    description: `If true, the marker can be dragged. Default value is false.`,
                },
                {
                    name: "icon",
                    type: 'string|<a href="https://developers.google.com/maps/documentation/javascript/reference/marker#Icon">Icon</a>|<a href="https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol">Symbol</a>',
                    default: "undefined",
                    description: `Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as <strong>url</strong>.`,
                },
                {
                    name: "label",
                    type: 'string|<a href="https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel">MarkerLabel</a>',
                    default: "undefined",
                    description: `Adds a label to the marker. The label can either be a string, or a <strong>MarkerLabel</strong> object.`,
                },
                {
                    name: "map",
                    type: '<a href="https://developers.google.com/maps/documentation/javascript/reference/map#Map">Map</a>|<a href="https://developers.google.com/maps/documentation/javascript/reference/street-view#StreetViewPanorama">StreetViewPanorama</a> <span class="optional-type-annotation">optional</span><',
                    default: "undefined",
                    description: `Map on which to display Marker.`
                },
                {
                    name: "opacity",
                    type: 'number',
                    default: "undefined",
                    description: `The marker's opacity between 0.0 and 1.0.`
                },
                {
                    name: "optimized",
                    type: 'boolean',
                    default: "undefined",
                    description: `Optimization renders many markers as a single static element. Optimized rendering is enabled by default.
                    Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate
                    DOM element (advanced usage only).`
                },
                {
                    name: "position",
                    type: '<a href="https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLng">LatLng</a>|<a href="https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngLiteral">LatLngLiteral</a>',
                    default: "undefined",
                    description: `Marker position. Required.`
                },
                {
                    name: "shape",
                    type: '<a href="https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerShape">MarkerShape</a>',
                    default: "undefined",
                    description: `Image map region definition used for drag/click.`
                },
                {
                    name: "title",
                    type: 'string',
                    default: "undefined",
                    description: `Rollover text`
                },
                {
                    name: "visible",
                    type: 'boolean',
                    default: "undefined",
                    description: `If true, the marker is visible.`
                },
                {
                    name: "zIndex",
                    type: 'number',
                    default: "undefined",
                    description: `All markers are displayed on the map in order of their zIndex,
                    with higher values displaying in front of markers with lower values. By default,
                     markers are displayed according to their vertical position on screen, with lower
                     markers appearing in front of markers further up the screen.`
                },


            ],
            events:[
                {
                    name: 'animation_changed',
                    description: 'This event is fired when the marker\'s animation property changes.',
                    value: 'void',
                },
                {
                    name: 'click',
                    description: 'This event is fired when the marker icon was clicked.',
                    value: 'MouseEvent',
                },
                {
                    name: 'clickable_changed',
                    description: 'This event is fired when the marker\'s clickable property changes.',
                    value: 'void',
                },
                {
                    name: 'cursor_changed',
                    description: 'This event is fired when the marker\'s cursor property changes.',
                    value: 'void',
                },
                {
                    name: 'dblclick',
                    description: 'This event is fired when the marker icon was double clicked.',
                    value: ' MouseEvent',
                },
                {
                    name: 'drag',
                    description: 'This event is repeatedly fired while the user drags the marker.',
                    value: ' MouseEvent',
                },
                {
                    name: 'dragend',
                    description: 'This event is fired when the user stops dragging the marker.',
                    value: ' MouseEvent',
                },
                {
                    name: 'draggable_changed',
                    description: 'This event is fired when the marker\'s draggable property changes.',
                    value: ' void',
                },
                {
                    name: 'dragstart',
                    description: 'This event is fired when the user starts dragging the marker.',
                    value: 'MouseEvent',
                },
                {
                    name: 'flat_changed',
                    description: 'This event is fired when the marker\'s flat property changes.',
                    value: 'void',
                },
                {
                    name: 'icon_changed',
                    description: 'This event is fired when the marker icon property changes.',
                    value: 'void',
                },
                {
                    name: 'mousedown',
                    description: 'This event is fired for a mousedown on the marker.',
                    value: 'MouseEvent',
                },
                {
                    name: 'mouseout',
                    description: 'This event is fired when the mouse leaves the area of the marker icon.',
                    value: 'MouseEvent',
                },
                {
                    name: 'mouseover',
                    description: 'This event is fired when the mouse enters the area of the marker icon.',
                    value: 'MouseEvent',
                },
                {
                    name: 'mouseup',
                    description: 'This event is fired for a mouseup on the marker.',
                    value: 'MouseEvent',
                },
                {
                    name: 'position_changed',
                    description: 'This event is fired when the marker position property changes.',
                    value: 'void',
                },
                {
                    name: 'rightclick',
                    description: 'This event is fired for a rightclick on the marker.',
                    value: 'MouseEvent',
                },
                {
                    name: 'shape_changed',
                    description: 'This event is fired when the marker\'s shape property changes.',
                    value: 'void',
                },
                {
                    name: 'title_changed',
                    description: 'This event is fired when the marker title property changes.',
                    value: 'void',
                },
                {
                    name: 'visible_changed',
                    description: 'This event is fired when the marker\'s visible property changes.',
                    value: 'void',
                },
                {
                    name: 'zindex_changed',
                    description: 'This event is fired when the marker\'s zIndex property changes.',
                    value: 'void',
                },
            ]
        };

    }
</script>

<style scoped>

</style>
