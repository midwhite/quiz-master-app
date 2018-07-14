import { mount } from '@vue/test-utils';
import SignInModal from '@/components/welcome/modals/sign-in-modal';

describe('welcome/modals/sign-in-modal.vue', () => {
  let $store;
  let dispatchSpy;
  let wrapper;

  beforeEach(() => {
    // prepare dispatch spy
    $store = {
      dispatch: () => new Promise(resolve => resolve()),
    };
    dispatchSpy = sinon.spy($store, 'dispatch');
    // add spy to wrapper as mocks with i18n mock
    wrapper = mount(SignInModal, {
      mocks: {
        $t: key => key,
        $store,
      },
    });
  });

  describe('signing up', () => {
    describe('Error Case', () => {
      it('failed to sign up because of lack of passwordConfirmation', () => {
        wrapper.setData({
          activeTab: 'signUp',
          user: {
            email: 'dummy@quiz-master.com',
            password: 'password',
          },
        });

        wrapper.find('#SignUpForm').trigger('submit');
        expect(wrapper.vm.errors).to.include('errors.isRequired');
        // check signUp dispatch not called
        expect(dispatchSpy.calledOnceWith('signUp')).to.equal(false);
      });

      it('failed to sign up because of invalid passwordConfirmation', () => {
        wrapper.setData({
          activeTab: 'signUp',
          user: {
            email: 'quiz-master.com',
            password: 'password',
            passwordConfirmation: '_password',
          },
        });

        wrapper.find('#SignUpForm').trigger('submit');
        expect(wrapper.vm.errors).to.include('errors.isInvalid');
        // check signUp dispatch not called
        expect(dispatchSpy.calledOnceWith('signUp')).to.equal(false);
      });

      it('failed to sign up because of invalid email format', () => {
        wrapper.setData({
          activeTab: 'signUp',
          user: {
            email: 'quiz-master.com',
            password: 'password',
            passwordConfirmation: 'password',
          },
        });

        wrapper.find('#SignUpForm').trigger('submit');
        expect(wrapper.vm.errors).to.include('errors.isInvalid');
        // check signUp dispatch not called
        expect(dispatchSpy.calledOnceWith('signUp')).to.equal(false);
      });
    });
  });

  describe('Normal Case', () => {
    it('succeeds in signing up by submitting form', () => {
      wrapper.setData({
        activeTab: 'signUp',
        user: {
          email: 'dummy@quiz-master.com',
          password: 'password',
          passwordConfirmation: 'password',
        },
      });

      wrapper.find('#SignUpForm').trigger('submit');
      expect(wrapper.vm.errors).to.have.lengthOf(0);
      // check signUp dispatch called
      expect(dispatchSpy.calledOnceWith('signUp')).to.equal(true);
    });

    it('succeeds in signing up by clicking button', () => {
      wrapper.setData({
        activeTab: 'signUp',
        user: {
          email: 'dummy@quiz-master.com',
          password: 'password',
          passwordConfirmation: 'password',
        },
      });

      wrapper.find('#sign-up-button').trigger('click');
      expect(wrapper.vm.errors).to.have.lengthOf(0);
      // check signUp dispatch called
      expect(dispatchSpy.calledOnceWith('signUp')).to.equal(true);
    });
  });

  describe('signing in', () => {
    describe('Normal Case', () => {
      it('succeeds in signing in', () => {
        wrapper.setData({
          activeTab: 'signIn',
          user: {
            email: 'dummy@quiz-master.com',
            password: 'password',
          },
        });

        wrapper.find('#SignUpForm').trigger('submit');
        expect(wrapper.vm.errors).to.have.lengthOf(0);
        // check signUp dispatch called
        expect(dispatchSpy.calledOnceWith('signIn')).to.equal(true);
      });
    });
  });
});
