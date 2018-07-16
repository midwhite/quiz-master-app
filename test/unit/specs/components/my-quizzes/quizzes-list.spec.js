import { mount } from '@vue/test-utils';
import QuizzesListComponent from '@/components/my-quizzes/quizzes-list';
import { myQuizzes } from '../../factories/quizzes';
import { currentUser } from '../../factories/users';

describe('quizzes-list.vue', () => {
  let $store;
  let wrapper;

  beforeEach(() => {
    // prepare dispatch spy
    $store = {
      dispatch: () => new Promise(resolve => resolve()),
      commit: () => new Promise(resolve => resolve()),
      state: {
        currentUser,
        myQuizzes,
      },
    };
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
