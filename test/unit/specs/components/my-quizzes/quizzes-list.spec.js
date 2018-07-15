import { mount, createLocalVue } from '@vue/test-utils';
import messages from '@/i18n';
import QuizzesListComponent from '@/components/my-quizzes/quizzes-list';

describe('quizzes-list.vue', () => {
  let $store;
  let dispatchSpy;
  let commitSpy;
  let wrapper;
  let myQuizzes = [
    { id: 1, title: 'QuizTitle', correctAnswer: 'CorrectAnswer' },
    { id: 2, title: 'QuizTitle', correctAnswer: 'CorrectAnswer' },
    { id: 3, title: 'QuizTitle', correctAnswer: 'CorrectAnswer' },
    { id: 4, title: 'QuizTitle', correctAnswer: 'CorrectAnswer' },
    { id: 5, title: 'QuizTitle', correctAnswer: 'CorrectAnswer' },
  ];

  beforeEach(() => {
    // prepare dispatch spy
    $store = {
      dispatch: () => new Promise(resolve => resolve()),
      commit: () => new Promise(resolve => resolve()),
      state: {
        currentUser: { timezone: 'Asia/Tokyo' },
        myQuizzes,
      },
    };
    dispatchSpy = sinon.spy($store, 'dispatch');
    commitSpy = sinon.spy($store, 'commit');
    // add spy to wrapper as mocks with i18n mock
    wrapper = mount(QuizzesListComponent, {
      mocks: {
        $t: key => key,
        $store,
      },
      stubs: ['router-link'],
    });
  });

  it('should render quiz list without errors', () => {
    expect(wrapper.findAll('.my-quiz-thumbnail-component').length).to.eq(myQuizzes.length);
  });
});
