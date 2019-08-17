const GMapProps: any = {
    backgroundColor: {
        type: String,
        // default: '',
        required: false,
    },
    center: {
        // LatLng | LatLngLiteral;
        required: true,
    },
    clickableIcons: {
        type: Boolean,
        required: false,
    },
    controlSize: {
        type: Number,
        required: false,
    },
    disableDefaultUI: {
        type: Boolean,
        required: false,
    },
    disableDoubleClickZoom: {
        type: Boolean,
        required: false,
    },
    draggable:  {
        type: Boolean,
        required: false,
    },
    draggableCursor: {
        type: String,
        required: false,
    },
    draggingCursor: {
        type: String,
        required: false,
    },
    fullscreenControl: {
        type: Boolean,
        required: false,
    },
    fullscreenControlOptions: {
        // FullscreenControlOptions
        required: false,
    },
    gestureHandling: {
        // GestureHandlingOptions;
        required: false,
    },
    heading: {
        type: Number,
        required: false,
    },
    keyboardShortcuts: {
        type: Boolean,
        required: false,
    },
    mapTypeControl: {
        type: Boolean,
        required: false,
    },
    mapTypeControlOptions: {
        // MapTypeControlOptions;
        required: false,
    },
    mapTypeId: {
        // MapTypeId;
        required: false,
    },
    maxZoom: {
        type: Number,
        required: false,
    },
    minZoom: {
        type: Number,
        required: false,
    },
    noClear: {
        type: Boolean,
        required: false,
    },
    panControl: {
        type: Boolean,
        required: false,
    },
    panControlOptions:{
        // PanControlOptions;
        required: false,
    },
    restriction: {
        // MapRestriction;
        required: false,
    },
    rotateControl: {
        type: Boolean,
        required: false,
    },
    rotateControlOptions: {
        required: false,
        // RotateControlOptions;
    },
    scaleControl: {
        type: Boolean,
        required: false,
    },
    scaleControlOptions: {
        // ScaleControlOptions;
        required: false,
    },
    scrollwheel: {
        type: Boolean,
        required: false,
    },
    streetView: {
        //  StreetViewPanorama;
        required: false,
    },
    streetViewControl: {
        type: Boolean,
        required: false,
    },
    streetViewControlOptions: {
        //  StreetViewControlOptions;
        required: false,
    },
    styles: {
        //  MapTypeStyle[];
        required: false,
    },
    tilt: {
        type: Number,
        required: false,
    },
    zoom: {
        type: Number,
        default:5,
        required: false,
    },
    zoomControl: {
        type: Boolean,
        required: false,
    },
    zoomControlOptions: {
        // ZoomControlOptions
        required: false,
    },
}
export default GMapProps;
