import Vue from 'vue';
import Vuex from 'vuex';
import Root from './root';
import store from './store';
import router from './router';

import './assets/css/root.scss';

Vue.use(Vuex);

Vue.config.productionTip = false;

/* eslint-disable no-new */
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store: new Vuex.Store(store),
    render: h => h(Root),
  }).$mount('#app');
});
/* eslint-eable no-new */
