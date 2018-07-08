import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/i18n';
import WelcomeComponent from '@/components/welcome';

describe('welcome.vue', () => {
  it('should render title in English', () => {
    Vue.use(VueI18n);
    const Constructor = Vue.extend(WelcomeComponent);
    const vm = new Constructor({
      i18n: new VueI18n({ locale: 'en', messages }),
    }).$mount();
    expect(vm.$el.querySelector('#WelcomeComponent h1').textContent)
      .to.equal(messages.en.components.welcome.title);
  });

  it('should render title in Japanese', () => {
    Vue.use(VueI18n);
    const Constructor = Vue.extend(WelcomeComponent);
    const vm = new Constructor({
      i18n: new VueI18n({ locale: 'ja', messages }),
    }).$mount();
    expect(vm.$el.querySelector('#WelcomeComponent h1').textContent)
      .to.equal(messages.ja.components.welcome.title);
  });
});
