import {Inject} from 'vue-property-decorator';
import {DocumentRef, WindowRef} from '@/utils/browser-globals';
export enum GoogleMapsScriptProtocol {
    HTTP = 1,
    HTTPS = 2,
    AUTO = 3
}

export interface LazyMapsAPILoaderConfigLiteral {
    /**
     * The Google Maps API Key (see:
     * https://developers.google.com/maps/documentation/javascript/get-api-key)
     */
    apiKey?: string;

    /**
     * The Google Maps client ID (for premium plans).
     * When you have a Google Maps APIs Premium Plan license, you must authenticate
     * your application with either an API key or a client ID.
     * The Google Maps API will fail to load if both a client ID and an API key are included.
     */
    clientId?: string;

    /**
     * The Google Maps channel name (for premium plans).
     * A channel parameter is an optional parameter that allows you to track usage under your client
     * ID by assigning a distinct channel to each of your applications.
     */
    channel?: string;

    /**
     * Google Maps API version.
     */
    apiVersion?: string;

    /**
     * Host and Path used for the `<script>` tag.
     */
    hostAndPath?: string;

    /**
     * Protocol used for the `<script>` tag.
     */
    protocol?: GoogleMapsScriptProtocol;

    /**
     * Defines which Google Maps libraries should get loaded.
     */
    libraries?: string[];

    /**
     * The default bias for the map behavior is US.
     * If you wish to alter your application to serve different map tiles or bias the
     * application, you can overwrite the default behavior (US) by defining a `region`.
     * See https://developers.google.com/maps/documentation/javascript/basics#Region
     */
    region?: string;

    /**
     * The Google Maps API uses the browser's preferred language when displaying
     * textual information. If you wish to overwrite this behavior and force the API
     * to use a given language, you can use this setting.
     * See https://developers.google.com/maps/documentation/javascript/basics#Language
     */
    language?: string;
}

export default class LoadGmapApi {
    public MapInit:Boolean = false;
    // @ts-ignore
    protected _scriptLoadingPromise: Promise<void>;
    protected _config: LazyMapsAPILoaderConfigLiteral;
    protected _windowRef: WindowRef;
    protected _documentRef: DocumentRef;
    protected readonly _SCRIPT_ID: string = 'GMapInitApiScript';
    protected readonly callbackName: string = 'GMapInit';

    constructor( config: LazyMapsAPILoaderConfigLiteral, w: WindowRef = new WindowRef(), d: DocumentRef = new DocumentRef()) {
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }

    load(): Promise<void> {
        const window = <any>this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            this.MapInit = true;
            return Promise.resolve();
        }

        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }

        // this can happen in HMR situations or Stackblitz.io editors.
        const scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }

        const script:HTMLScriptElement = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    }

    private async _assignScriptLoadingPromise(scriptElem: HTMLScriptElement) {
        this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {

            (<any>this._windowRef.getNativeWindow())[this.callbackName] = (data: any) => {
                  this.MapInit = true;
                  console.log('Mapa Cargado');
                  resolve();
            };
            /*if (!(<any>window).google || !(<any>window).google.maps) {
                throw new Error(
                    'Google Maps API not loaded on page. Make sure window.google.maps is available!');
            }*/
        });
    }

    protected _getScriptSrc(callbackName: string): string {
        let protocolType: GoogleMapsScriptProtocol =
            (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        let protocol: string = '';

        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }

        const hostAndPath: string = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        const queryParams: any  = {
           // v: this._config.apiVersion || 'quarterly',
            key: this._config.apiKey,
            callback: callbackName,
           // client: this._config.clientId,
           // channel: this._config.channel,
           libraries: this._config.libraries,
           // region: this._config.region,
           // language: this._config.language,
        };
        const params: string = Object.keys(queryParams)
            .filter((k: string) => queryParams[k] != null)
            .filter((k: string) => {
                // remove empty arrays
                return !Array.isArray(queryParams[k]) ||
                    (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
            })
            .map((k: string) => {
                // join arrays as comma seperated strings
                let i = queryParams[k];
                if (Array.isArray(i)) {
                    return {key: k, value: i.join(',')};
                }
                return {key: k, value: queryParams[k]};
            })
            .map((entry: {key: string, value: string}) => {
                return `${entry.key}=${entry.value}`;
            })
            .join('&');
        /*
        let params =  Object.keys(queryParams)
                            .map((key: string) => {
                                console.log(queryParams[key].length===0 ? 'vacio' : 'no vacio')
                                return  queryParams[key] =='undefined' ? '' : `${key}=${queryParams[key]}`;
                            })
                            .join('&');*/
        console.log(params)
        return `${protocol}//${hostAndPath}?${params}`;
    }
}
    /*let isApiSetUp = false

    /**
     * @param apiKey    API Key, or object with the URL parameters. For example
     *                  to use Google Maps Premium API, pass
     *                    `{ client: <YOUR-CLIENT-ID> }`.
     *                  You may pass the libraries and/or version (as `v`) parameter into
     *                  this parameter and skip the next two parameters
     * @param version   Google Maps version
     * @param libraries Libraries to load (@see
     *                  https://developers.google.com/maps/documentation/javascript/libraries)
     * @param loadCn    Boolean. If set to true, the map will be loaded from google maps China
     *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
     *
     * Example:
     * ```
     *      import {load} from 'vue-google-maps'
     *
     *      load(<YOUR-API-KEY>)
     *
     *      load({
     *              key: <YOUR-API-KEY>,
     *      })
     *
     *      load({
     *              client: <YOUR-CLIENT-ID>,
     *              channel: <YOUR CHANNEL>
     *      })
     * ```
    *//*
    // export const loadGmapApi = (options, loadCn) => {
        if (typeof document === 'undefined') {
            // Do nothing if run from server-side
            return
        }
        if (!isApiSetUp) {
            isApiSetUp = true

       //     const googleMapScript = document.createElement('SCRIPT')

            // Allow options to be an object.
            // This is to support more esoteric means of loading Google Maps,
            // such as Google for business
            // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
            if (typeof options !== 'object') {
                throw new Error('options should  be an object')
            }

            // libraries
            if (Array.prototype.isPrototypeOf(options.libraries)) {
                options.libraries = options.libraries.join(',')
            }
            options['callback'] = 'vueGoogleMapsInit'

            let baseUrl = 'https://maps.googleapis.com/'

            if (typeof loadCn === 'boolean' && loadCn === true) {
                baseUrl = 'https://maps.google.cn/'
            }

            let url = baseUrl + 'maps/api/js?' +
                Object.keys(options)
                    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options[key]))
                    .join('&')

            googleMapScript.setAttribute('src', url)
            googleMapScript.setAttribute('async', '')
            googleMapScript.setAttribute('defer', '')
            document.head.appendChild(googleMapScript)
        } else {
            throw new Error('You already started the loading of google maps')
        }
    }
*/
