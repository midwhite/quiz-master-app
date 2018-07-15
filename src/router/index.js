import Vue from 'vue';
import Router from 'vue-router';
import QuizzesComponent from '@/components/my-quizzes/';
import QuizzesListComponent from '@/components/my-quizzes/quizzes-list';
import ShowQuizComponent from '@/components/my-quizzes/show';
import EditQuizComponent from '@/components/my-quizzes/edit';

Vue.use(Router);

/* eslint-disable object-property-newline */
export default new Router({
  routes: [
    { path: '/', component: QuizzesComponent, children: [
      { path: '/', name: 'QuizzesList', component: QuizzesListComponent },
      { path: '/quizzes/:id', name: 'ShowQuiz', component: ShowQuizComponent },
      { path: '/quizzes/:id/edit', name: 'EditQuiz', component: EditQuizComponent },
    ] },
  ],
});
/* eslint-enable */
