import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AnswerQuizComponent from '@/components/quiz-mode/answer-quiz';
import { myQuizzes } from '../../factories/quizzes';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('quiz-mode/answer-quiz.vue', () => {
  let wrapper;
  let commit;
  let dispatch;

  beforeEach(() => {
    // generate spies
    const $store = {
      commit: () => new Promise(resolve => resolve({})),
      dispatch: () => new Promise(resolve => resolve({ quiz: {} })),
      state: { myQuizzes },
    };
    commit = sinon.spy($store, 'commit');
    dispatch = sinon.spy($store, 'dispatch');
    // mount component
    wrapper = shallowMount(AnswerQuizComponent, {
      // to escape `this.$route.params.id`.
      // in detail: https://github.com/midwhite/quiz-master-app/issues/2
      computed: { quizId: () => 1 },
      mocks: { $t: key => key, $store },
      stubs: ['result-modal', 'router-link'],
      router,
      localVue,
    });
  });

  it('show an alert if submit answer before inputting text', () => {
    wrapper.find('.answer-form').trigger('submit');
    expect(commit.calledWith('setMessage', 'errors.isRequired')).to.eq(true);
    expect(dispatch.called).to.eq(false);
  });

  it('succeeds in submitting', () => {
    // set sample answer
    wrapper.setData({
      answer: { content: 'sample answer' },
    });
    wrapper.find('.answer-form').trigger('submit');

    expect(commit.calledWith('setMessage')).to.eq(false);
    expect(dispatch.calledWith('answerQuiz')).to.eq(true);
  });
});
