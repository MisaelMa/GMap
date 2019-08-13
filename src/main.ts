import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
declare module "vue/types/vue" {
  interface Vue {
    $GMap: any;
  }
}

import LoadGmapApi, {LazyMapsAPILoaderConfigLiteral} from '@/plugins/LoadGmapApi';
Vue.config.productionTip = false;
let config:LazyMapsAPILoaderConfigLiteral = {
  apiKey: 'AIzaSyAuq49e-CZGNN568Y8EDEpZayR-OkqUMI4',
  libraries: ['places'],
  apiVersion: '3.37',
}
const Map = new LoadGmapApi(config);
Vue.prototype.$GMap = Map;
Map.load();



new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
