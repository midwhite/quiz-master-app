import { mount } from '@vue/test-utils';
import QuizDetailComponent from '@/components/my-quizzes/quiz-detail';
import { myQuizzes } from '../../factories/quizzes';

describe('quizz-detail.vue', () => {
  let $store;
  let wrapper;
  const quiz = myQuizzes[0];

  beforeEach(() => {
    // add spy to wrapper as mocks with i18n mock
    wrapper = mount(QuizDetailComponent, {
      propsData: { quiz },
      mocks: {
        $t: key => key,
        $store,
      },
      stubs: ['router-link'],
    });
  });

  it('should render quiz title without errors', () => {
    expect(wrapper.element.querySelector('h3').textContent).to.eq(quiz.title);
  });
});
