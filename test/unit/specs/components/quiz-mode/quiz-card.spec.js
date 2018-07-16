import VueRouter from 'vue-router';
import { mount, createLocalVue } from '@vue/test-utils';
import QuizCardComponent from '@/components/quiz-mode/quiz-card';
import { quiz } from '../../factories/quizzes';
import { currentUser } from '../../factories/users';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter([{ name: 'AnswerQuiz' }]);

describe('quiz-mode/quiz-card.vue', () => {
  const createWrapper = propsData => mount(QuizCardComponent, {
    propsData,
    mocks: { $t: key => key },
    // stubs: ['router-link'],
    localVue,
    router,
  });

  it('display \'correct\' icon if answer result is true', () => {
    const newQuiz = Object.assign({}, quiz);
    newQuiz.answered = true;
    newQuiz.result = true;
    const wrapper = createWrapper({ quiz: newQuiz, currentUser });
    expect(wrapper.find('.result-mark').element.src).to.include('/static/img/quizzes/correct.png');
  });

  it('display \'incorrect\' icon if answer result is false', () => {
    const newQuiz = Object.assign({}, quiz);
    newQuiz.answered = true;
    newQuiz.result = false;
    const wrapper = createWrapper({ quiz: newQuiz, currentUser });
    expect(wrapper.find('.result-mark').element.src).to.include('/static/img/quizzes/incorrect.png');
  });

  it('should not render result mark before answer exists', () => {
    const wrapper = createWrapper({ quiz, currentUser });
    expect(wrapper.find('.result-mark').exists()).to.eq(false);
  });
});
