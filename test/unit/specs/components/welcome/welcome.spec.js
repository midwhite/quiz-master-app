import Vue from 'vue';
import WelcomeComponent from '@/components/welcome';

describe('welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(WelcomeComponent);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('#WelcomeComponent h1').textContent)
      .to.equal('Welcome to QuizMaster!');
  });
});
