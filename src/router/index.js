import Vue from 'vue';
import Router from 'vue-router';
import QuizzesComponent from '@/components/my-quizzes/';
import QuizzesListComponent from '@/components/my-quizzes/quizzes-list';
import ShowQuizComponent from '@/components/my-quizzes/show';

Vue.use(Router);

/* eslint-disable object-property-newline */
export default new Router({
  routes: [
    { path: '/', component: QuizzesComponent, children: [
      { path: '/', name: 'QuizzesList', component: QuizzesListComponent },
      { path: '/quizzes/:id', name: 'ShowQuiz', component: ShowQuizComponent },
    ] },
  ],
});
/* eslint-enable */
