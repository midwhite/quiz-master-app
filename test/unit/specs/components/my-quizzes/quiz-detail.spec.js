import { mount } from '@vue/test-utils';
import QuizDetailComponent from '@/components/my-quizzes/quiz-detail';
import { quiz } from '../../factories/quizzes';

describe('quizz-detail.vue', () => {
  it('should render quiz title without errors', () => {
    const wrapper = mount(QuizDetailComponent, {
      propsData: { quiz },
      mocks: {
        $t: key => key,
      },
      stubs: ['router-link'],
    });
    expect(wrapper.element.querySelector('h3').textContent).to.eq(quiz.title);
  });
});
