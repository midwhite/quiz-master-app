import { shallowMount } from '@vue/test-utils';
import QuizFormComponent from '@/components/my-quizzes/quiz-form';
import { myQuizzes } from '../../factories/quizzes';

describe('quizz-form.vue', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    // add spy to wrapper as mocks with i18n mock
    spy = sinon.stub();
    wrapper = shallowMount(QuizFormComponent, {
      mocks: {
        $t: key => key,
        $emit: spy,
      },
    });
  });

  it('should emit submit event with valid quiz object', () => {
    wrapper.setData({
      quiz: myQuizzes[0],
    });
    wrapper.find('#quiz-form-submit').trigger('click');
    expect(wrapper.vm.errors.length).to.equal(0);
    expect(spy.calledWith('submit')).to.equal(true);
  });

  it('should prevent to emit submit event with invalid quiz object', () => {
    wrapper.setData({
      quiz: {},
    });
    wrapper.find('#quiz-form-submit').trigger('click');
    expect(wrapper.vm.errors.length).to.equal(3);
    expect(wrapper.vm.errors).to.include('errors.isRequired');
    expect(spy.calledWith('submit')).to.equal(false);
  });

  it('should emit cancel event by clicking cancel button', () => {
    wrapper.find('#quiz-form-cancel').trigger('click');
    expect(spy.calledWith('cancel')).to.equal(true);
  });
});
