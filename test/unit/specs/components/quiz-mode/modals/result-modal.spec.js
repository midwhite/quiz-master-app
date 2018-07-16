import { mount } from '@vue/test-utils';
import ResultModalComponent from '@/components/quiz-mode/modals/result-modal';

describe('quiz-mode/modals/result-modal.vue', () => {
  let wrapper;

  describe('in case quiz has explanation', () => {
    it('render explanation as HTML successfully', () => {
      wrapper = mount(ResultModalComponent, {
        propsData: {
          answer: { content: '111 dogs', result: true },
          correctAnswer: 'One hundred eleven dogs',
          explanation: '<p id="this-is-test-explanation">This is test explanation.</p>',
        },
        mocks: { $t: key => key },
      });
      expect(wrapper.find('#this-is-test-explanation').text()).to.equal('This is test explanation.');
    });

    it('render valid result message as correct that responds to prop \'result\'', () => {
      wrapper = mount(ResultModalComponent, {
        propsData: {
          answer: { content: '111 dogs', result: true },
        },
        mocks: { $t: key => key },
      });
      expect(wrapper.find('.result-message').text()).to.eq('models.quiz.result.correct');
    });

    it('render valid result message as incorrect that responds to prop \'result\'', () => {
      wrapper = mount(ResultModalComponent, {
        propsData: {
          answer: { content: '111 dogs', result: false },
        },
        mocks: { $t: key => key },
      });
      expect(wrapper.find('.result-message').text()).to.eq('models.quiz.result.incorrect');
    });
  });

  describe('in case quiz has no explanation', () => {
    it('should not render explanation', () => {
      wrapper = mount(ResultModalComponent, {
        propsData: {
          answer: { content: '111 dogs' },
          correctAnswer: 'One hundred eleven dogs',
        },
        mocks: { $t: key => key },
      });
      expect(wrapper.find('#explanation-wrapper').exists()).to.eq(false);
      expect(wrapper.find('.no-explanation').exists()).to.eq(true);
    });
  });
});
