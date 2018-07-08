import Vue from 'vue';
import Router from 'vue-router';
import WelcomeComponent from '@/components/welcome';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Welcome', component: WelcomeComponent },
  ],
});
