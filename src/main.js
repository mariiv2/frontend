import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import VueLogger from 'vuejs-logger';

const options = {};

Vue.use(VueLogger, options);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});