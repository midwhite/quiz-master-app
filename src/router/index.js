import Vue from 'vue';
import Router from 'vue-router';
import QuizzesComponent from '@/components/quizzes/';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'quizzes', component: QuizzesComponent },
  ],
});
