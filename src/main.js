import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import Root from './root';
import store from './store';
import router from './router';
import messages from './i18n';

import './assets/css/global.scss';

Vue.use(Vuex);
Vue.use(VueI18n);

Vue.config.productionTip = false;

/* eslint-disable no-new */
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store: new Vuex.Store(store),
    i18n: new VueI18n({ locale: 'en', messages }),
    render: h => h(Root),
  }).$mount('#app');
});
/* eslint-eable no-new */
