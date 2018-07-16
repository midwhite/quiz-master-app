import { mount } from '@vue/test-utils';
import ResultModalComponent from '@/components/quiz-mode/modals/result-modal';

describe('quiz-mode/modals/result-modal.vue', () => {
  // define function to create wrapper
  const createWrapper = propsData => mount(ResultModalComponent, {
    propsData,
    mocks: {
      $t: key => key,
      $store: {
        dispatch: () => new Promise(resolve => resolve({})),
        commit: () => new Promise(resolve => resolve({})),
      },
    },
  });

  describe('in case quiz has explanation', () => {
    it('render explanation as HTML successfully', () => {
      const wrapper = createWrapper({
        answer: { content: '111 dogs', result: true },
        correctAnswer: 'One hundred eleven dogs',
        explanation: '<p id="this-is-test-explanation">This is test explanation.</p>',
      });
      expect(wrapper.find('#this-is-test-explanation').text()).to.equal('This is test explanation.');
    });

    it('render valid result message as correct that responds to prop \'result\'', () => {
      const wrapper = createWrapper({
        answer: { content: '111 dogs', result: true },
      });
      expect(wrapper.find('.result-message').text()).to.eq('models.quiz.result.correct');
    });

    it('render valid result message as incorrect that responds to prop \'result\'', () => {
      const wrapper = createWrapper({
        answer: { content: '111 dogs', result: false },
      });
      expect(wrapper.find('.result-message').text()).to.eq('models.quiz.result.incorrect');
    });
  });

  describe('in case quiz has no explanation', () => {
    it('should not render explanation', () => {
      const wrapper = createWrapper({
        answer: { content: '111 dogs' },
        correctAnswer: 'One hundred eleven dogs',
      });
      expect(wrapper.find('#explanation-wrapper').exists()).to.eq(false);
      expect(wrapper.find('.no-explanation').exists()).to.eq(true);
    });
  });
});
