<template>
    <div>
        <a href="#api" class="mr-2 d-inline-flex core-goto text--primary core-goto--heading tag-H2 mb-2">
            <div class="layout align-center"><div class="markdown"><h2>API</h2>
            </div><!----></div></a>
        <ApiDoc :doc="DocMap"/>
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
    export default class ApiMap extends Vue {
        public DocMap: any = {
            name: "GMap",
            props: [
                {
                    name: "backgroundColor",
                    type: "string",
                    default: "undefined",
                    description: `Color used for the background of the Map div. This color will be
                    visible when tiles have not yet loaded as the user pans. This option can only be set when the map is initialized.`,
                },
                {
                    name: "center",
                    type: "LatLng | LatLngLiteral",
                    default: "undefined",
                    description: "The initial Map center. Required.",
                },
                {
                    name: "clickableIcons",
                    type: "boolean",
                    default: "undefined",
                    description: `When false, map icons are not clickable. A map icon represents a point of interest,
                    also known as a POI. By default map icons are clickable.`,
                },
                {
                    name: "controlSize",
                    type: "number",
                    default: "undefined",
                    description: `Size in pixels of the controls appearing on the map. This value must be supplied
                    directly when creating the Map, updating this value later may bring the controls into an undefined state.
                    Only governs the controls made by the Maps API itself. Does not scale developer created custom controls.`
                },
                {
                    name: "disableDefaultUI",
                    type: "boolean",
                    default: "undefined",
                    description: "Enables/disables all default UI. May be overridden individually.",
                },
                {
                    name: "disableDoubleClickZoom",
                    type: "boolean",
                    default: "true",
                    description: `
                       Enables/disables zoom and center on double click. Enabled by default.
                       <code>Note</code>: This property <code>is not recommended.</code> To disable zooming on
                       double click, you can use the <code>gestureHandling</code> property, and set it to <code>"none"</code>.`
                },
                {
                    name: "draggable",
                    type: "boolean",
                    default: "true",
                    description: `
                    If false, prevents the map from being dragged. Dragging is enabled by default.
                    <code>Note</code>: This property is <code>deprecated</code>. To disable dragging on the map, you can use
                    the <code>gestureHandling</code> property, and set it to <code>"none"</code>.`
                },
                {
                    name: "draggableCursor",
                    type: "string",
                    default: "undefined",
                    description: `The name or url of the cursor to display when mousing over a draggable map. This
                    property uses the css cursor attribute to change the icon. As with the css property, you must
                    specify at least one fallback cursor that is not a URL. For example:
                    <strong>draggableCursor: 'url</strong>(<a href="http://www.example.com/icon.png"
                               class="markdown--link markdown--internal">
                                http://www.example.com/icon.png
                            </a> <strong>.), auto;'</strong>.

                    `
                },
                {
                    name: "draggingCursor",
                    type: "string",
                    default: "undefined",
                    description: `The name or url of the cursor to display when the map is being dragged.
                                  This property uses the css cursor attribute to change the icon.
                                  As with the css property, you must specify at least one fallback cursor
                                  that is not a URL. For example:
                    <strong>draggingCursor: 'url</strong>(<a href="http://www.example.com/icon.png"
                               class="markdown--link markdown--internal">
                                http://www.example.com/icon.png
                            </a> <strong>.), auto;'</strong>.

                    `
                },
                {
                    name: "fullscreenControl",
                    type: "boolean",
                    default: "undefined",
                    description: "The enabled/disabled state of the Fullscreen control.",
                },
                {
                    name: "fullscreenControlOptions",
                    type: "FullscreenControlOptions",
                    default: "undefined",
                    description: "The display options for the Fullscreen control.",
                },
                {
                    name: "gestureHandling",
                    type: "string",
                    default: "undefined",
                    description: `
                        Esta configuración controla cómo la API maneja los gestos en el mapa. Valores permitidos:
                            <br/>
                            <strong>"cooperative"</strong>: Los eventos de desplazamiento y los gestos táctiles con un solo dedo desplazan
                            la página y no amplían ni desplazan el mapa. Los gestos táctiles con dos dedos se desplazan y amplían el mapa.
                            Desplazar eventos con una tecla Ctrl o la tecla or presionada para hacer zoom en el mapa.
                            En este modo, el mapa coopera con la página.
                            <br/>
                            <strong>"greedy"</strong>: Todos los gestos táctiles y eventos de desplazamiento desplazan o amplían el mapa.
                            <br/>
                            <strong>"none"</strong>: El mapa no se puede desplazar ni acercar mediante gestos del usuario.
                            <br/>
                            <strong>"auto"</strong>: (predeterminado) El manejo de gestos es cooperativo o codicioso, dependiendo de si la
                             página es desplazable o en un iframe. `,
                },
                {
                    name: "heading",
                    type: "number",
                    default: "undefined",
                    description: `El rumbo para imágenes aéreas en grados medidos en sentido horario desde la
                    dirección cardinal Norte. Los encabezados se ajustan al ángulo disponible más cercano para
                    el que hay imágenes disponibles.`,
                },
                {
                    name: "keyboardShortcuts",
                    type: "boolean",
                    default: "undefined",
                    description: `If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts
                     are enabled by default.`,
                },
                {
                    name: "mapTypeControl",
                    type: "boolean",
                    default: "undefined",
                    description: `The initial enabled/disabled state of the Map type control.`,
                },
                {
                    name: "mapTypeControl",
                    type: "MapTypeControlOptions",
                    default: "undefined",
                    description: `The initial display options for the Map type control.`,
                },
                {
                    name: "mapTypeId",
                    type: "MapTypeId|string",
                    default: "ROADMAP",
                    description: `The initial Map mapTypeId. Defaults to ROADMAP.`,
                },
                {
                    name: "maxZoom",
                    type: "number",
                    default: "undefined",
                    description: `
                    The maximum zoom level which will be displayed on the map. If omitted, or set to null,
                    the maximum zoom from the current map type is used instead.
                    Valid values: Integers between zero, and up to the supported
                    <a href="https://developers.google.com/maps/documentation/javascript/maxzoom"
                               class="markdown--link markdown--internal">
                                maximum zoom level
                            </a> .`,
                },
                {
                    name: "minZoom",
                    type: "number",
                    default: "undefined",
                    description: `
                    The minimum zoom level which will be displayed on the map. If omitted,
                    or set to null, the minimum zoom from the current map type is used instead.
                    Valid values: Integers between zero, and up to the supported
                    <a href="https://developers.google.com/maps/documentation/javascript/maxzoom"
                               class="markdown--link markdown--internal">
                                maximum zoom level
                            </a> .`,
                },
                {
                    name: "noClear",
                    type: "boolean",
                    default: "undefined",
                    description: `If true, do not clear the contents of the Map div.`,
                },
                {
                    name: "panControl",
                    type: "boolean",
                    default: "undefined",
                    description: `
                    The enabled/disabled state of the Pan control.
                    <strong>Note</strong>: The Pan control is not available in the new set of
                    controls introduced in v3.22 of the Google Maps JavaScript API.
                    While using v3.22 and v3.23, you can choose to use the earlier
                    set of controls rather than the new controls, thus making the
                    Pan control available as part of the old control set.
                     <a href="https://developers.google.com/maps/articles/v322-controls-diff"
                               class="markdown--link markdown--internal">
                                See What's New in the v3.22 Map Controls
                            </a> .`,
                },
                {
                    name: "panControlOptions",
                    type: "PanControlOptions",
                    default: "undefined",
                    description: `The enabled/disabled state of the Pan control.
                    <strong>Note</strong>: The Pan control is not available in the new set of
                    controls introduced in v3.22 of the Google Maps JavaScript API.
                    While using v3.22 and v3.23, you can choose to use the earlier
                    set of controls rather than the new controls, thus making the
                    Pan control available as part of the old control set.
                     <a href="https://developers.google.com/maps/articles/v322-controls-diff"
                               class="markdown--link markdown--internal">
                                See What's New in the v3.22 Map Controls
                            </a> .`,
                },
                {
                    name: "restriction",
                    type: " MapRestriction",
                    default: "undefined",
                    description: `Defines a boundary that restricts the area of the map accessible to users.
                    When set, a user can only pan and zoom while the camera view stays inside the limits of the boundary.`,
                },
                {
                    name: "rotateControl",
                    type: "boolean",
                    default: "undefined",
                    description: `The enabled/disabled state of the Rotate control.`,
                },
                {
                    name: "rotateControlOptions",
                    type: "RotateControlOptions",
                    default: "undefined",
                    description: `The display options for the Rotate control.`,
                },
                {
                    name: "scaleControl",
                    type: "boolean",
                    default: "undefined",
                    description: `The initial enabled/disabled state of the Scale control.`,
                },
                {
                    name: "scaleControlOptions",
                    type: "ScaleControlOptions",
                    default: "undefined",
                    description: `The initial display options for the Scale control.`,
                },
                {
                    name: "scrollwheel",
                    type: "boolean",
                    default: "undefined",
                    description: `
                    If false, disables zooming on the map using a mouse scroll wheel. The scrollwheel is enabled by default.
                    <strong>Note</strong>: This property is <strong>not recommended</strong>. To disable zooming using scrollwheel,
                    you can use the <strong>gestureHandling</strong> property, and set it to either "<strong>cooperative</strong>"
                    or "<strong>none</strong>".
                    `,
                }, {
                    name: "streetView",
                    type: "StreetViewPanorama",
                    default: "undefined",
                    description: `
                     A <strong>StreetViewPanorama</strong> to display when the Street View pegman is dropped on the map.
                     If no panorama is specified, a default <strong>StreetViewPanorama</strong> will be displayed in
                     the map's <code>div</code> when the pegman is dropped.
                    `,
                },
                {
                    name: "streetViewControl",
                    type: "boolean",
                    default: "undefined",
                    description: `
                        The initial enabled/disabled state of the Street View Pegman control.
                        This control is part of the default UI, and should be set to <code>false</code> when
                        displaying a map type on which the Street View road overlay should not appear
                        (e.g. a non-Earth map type).
                    `,
                },
                {
                    name: "streetViewControlOptions",
                    type: " StreetViewControlOptions",
                    default: "undefined",
                    description: `The initial display options for the Street View Pegman control.`,
                },
                {
                    name: "styles",
                    type: "Array<MapTypeStyle>",
                    default: "undefined",
                    description: `Styles to apply to each of the default map types. Note that for
                    <strong>satellite/hybrid</strong> and <strong>terrain</strong> modes, these styles will only apply
                    to labels and geometry.`,
                },
                {
                    name: "tilt",
                    type: " number",
                    default: "undefined",
                    description: `Controls the automatic switching behavior for the angle of
                    incidence of the map. The only allowed values are <strong>0</strong> and  <strong>45</strong>.
                    The value <strong>0</strong>causes the map to always use a 0° overhead view regardless of the zoom
                    level and viewport. The value <strong>45</strong> causes the tilt angle to automatically switch
                    to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back
                    to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only
                    available for <strong>satellite</strong> and <strong>hybrid</strong>
                    map types, within some locations, and at some zoom levels.
                    <strong>Note: getTilt</strong> returns the current tilt angle,
                    not the value specified by this option. Because <strong>getTilt</strong> and this option refer
                    to different things,do not <strong>bind()</strong> the <strong>tilt</strong> property;
                    doing so may yield unpredictable effects.`,
                },
                {
                    name: "zoom",
                    type: " number",
                    default: "undefined",
                    description: `
                        The initial Map zoom level. Required. Valid values: Integers between zero,
                        and up to the supported
                        <a href="https://developers.google.com/maps/documentation/javascript/maxzoom"
                               class="markdown--link markdown--internal">
                                maximum zoom level
                            </a> .`,
                },
                {
                    name: "zoomControl",
                    type: "  boolean",
                    default: "undefined",
                    description: `The enabled/disabled state of the Zoom control.`,
                },
                {
                    name: "zoomControlOptions",
                    type: " ZoomControlOptions",
                    default: "undefined",
                    description: `The display options for the Zoom control.`,
                },
            ],
            events:[
                {
                    name: 'bounds_changed',
                    description: 'This event is fired when the viewport bounds have changed.',
                    value: 'void',

                },
                {
                    name: 'center_changed',
                    description: 'This event is fired when the map center property changes.',
                    value: 'void',

                },
                {
                    name: 'click',
                    description: 'This event is fired when the user clicks on the map. An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeid is returned. IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeid field. The event can always be treated as an ApiMouseEvent when the placeid is not important. The click event is not fired if a marker or infowindow was clicked.',
                    value: 'MouseEvent|IconMouseEvent',

                },
                {
                    name: 'dblclick',
                    description: 'This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.',
                    value: 'MouseEvent',
                },
                {
                    name: 'drag',
                    description: 'This event is repeatedly fired while the user drags the map.',
                    value: 'void',
                },
                {
                    name: 'dragend',
                    description: 'This event is fired when the user stops dragging the map.',
                    value: 'void',
                },
                {
                    name: 'dragstart',
                    description: 'This event is fired when the user starts dragging the map.',
                    value: 'void',
                },
                {
                    name: 'heading_changed',
                    description: 'This event is fired when the map heading property changes.',
                    value: 'void',
                },
                {
                    name: 'idle',
                    description: 'This event is fired when the map becomes idle after panning or zooming.',
                    value: 'void',
                },
                {
                    name: 'maptypeid_changed',
                    description: 'This event is fired when the mapTypeId property changes.',
                    value: 'void',
                },
                {
                    name: 'mousemove',
                    description: 'This event is fired whenever the users mouse moves over the map container.',
                    value: 'MouseEvent',
                },
                {
                    name: 'mouseout',
                    description: 'This event is fired when the users mouse exits the map container.',
                    value: 'MouseEvent',
                },
                {
                    name: 'mouseover',
                    description: 'This event is fired when the users mouse enters the map container.',
                    value: 'MouseEvent',
                },
                {
                    name: 'projection_changed',
                    description: 'This event is fired when the projection has changed.',
                    value: 'void',
                },
                {
                    name: 'rightclick',
                    description: 'This event is fired when the DOM contextmenu event is fired on the map container.',
                    value: 'MouseEvent',
                },
                {
                    name: 'tilesloaded',
                    description: 'This event is fired when the visible tiles have finished loading.',
                    value: 'void',
                },
                {
                    name: 'tilt_changed',
                    description: 'This event is fired when the map tilt property changes.',
                    value: 'void',
                },
                {
                    name: 'zoom_changed',
                    description: 'This event is fired when the map zoom property changes.',
                    value: 'void',
                },
            ]
        };

    }
</script>

<style scoped>

</style>
