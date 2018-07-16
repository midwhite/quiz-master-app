import VueRouter from 'vue-router';
import { mount, createLocalVue } from '@vue/test-utils';
import QuizComponent from '@/components/my-quizzes/quiz';
import { quiz } from '../../factories/quizzes';
import { currentUser } from '../../factories/users';

describe('quizz.vue', () => {
  const localVue = createLocalVue();
  const router = new VueRouter();

  let wrapper;

  localVue.use(VueRouter);

  beforeEach(() => {
    wrapper = mount(QuizComponent, {
      propsData: { quiz, user: currentUser },
      mocks: {
        $t: key => key,
      },
      localVue,
      router,
    });
  });

  it('should render quiz title without errors', () => {
    expect(wrapper.find('h2').text()).to.eq(quiz.title);
  });
});
