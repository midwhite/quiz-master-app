<template>
  <modal @close="$emit('close')">
    <h3 slot="header">{{ $t('components.welcome.signUp') }}</h3>
    <div slot="body">
      <div class="row sign-in-tab">
        <div class="col" v-for="tab of tabs">
          <div class="sign-in-tab-item" :class="{ active: activeTab === tab }" @click="changeTab(tab)">{{ $t('components.welcome.' + tab) }}</div>
        </div>
      </div>
      <div class="errors">
        <div class="alert alert-danger" v-for="(error, i) of errors">
          <span>{{ error }}</span>
          <i class="close" @click="removeErrorMessage(i)">&times;</i>
        </div>
      </div>
      <form id="SignUpForm" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="sign-up-email">{{ $t('models.user.attributes.email') }}</label>
          <input type="email" name="user[email]" v-model="user.email" id="sign-up-email" class="form-control" :placeholder="$t('models.user.attributes.email')" />
        </div>
        <div class="form-group">
          <label for="sign-up-password">{{ $t('models.user.attributes.password') }}</label>
          <input type="password" name="user[password]" v-model="user.password" id="sign-up-password" class="form-control" :placeholder="$t('models.user.attributes.password')" />
        </div>
        <div class="form-group" v-if="isSignUpTab">
          <label for="sign-up-password-confirmation">{{ $t('models.user.attributes.passwordConfirmation') }}</label>
          <input type="password" name="user[password_confirmation]" v-model="user.passwordConfirmation" id="sign-up-password-confirmation" class="form-control" :placeholder="$t('models.user.attributes.passwordConfirmation')" />
        </div>
        <input type="submit" style="display: none;"></button>
      </form>
    </div>
    <div slot="footer">
      <div class="main-btn submit-btn" id="sign-up-button" @click="onSubmit">
        {{ (isSignUpTab) ? $t('components.welcome.signUp') : $t('components.welcome.signIn') }}
      </div>
    </div>
  </modal>
</template>

<script>
  import { mapActions } from 'vuex';
  import Constants from '@/constants';
  import Modal from '@/components/shared/modal';

  export default {
    data: () => ({
      activeTab: 'signIn',
      errors: [],
      user: {},
    }),
    computed: {
      tabs: () => ['signUp', 'signIn'],
      requiredProps() {
        const requiredProps = ['email', 'password'];
        if (this.isSignUpTab) {
          requiredProps.push('passwordConfirmation');
        }
        return requiredProps;
      },
      isSignUpTab() {
        return this.activeTab === this.tabs[0];
      },
      isSignInTab() {
        return this.activeTab === this.tabs[1];
      },
    },
    methods: {
      ...mapActions(['signUp', 'signIn']),
      changeTab(tab) {
        this.activeTab = tab;
      },
      onSubmit() {
        if (this.validateUser()) {
          if (this.isSignUpTab) {
            this.submitSignUp();
          } else {
            this.submitSignIn();
          }
        }
      },
      submitSignUp() {
        const message = this.$t('messages.thanksForSignUp');
        this.signUp({ form: this.$el.querySelector('#SignUpForm') }).then(() => {
          this.$emit('close');
          this.$store.commit('setMessage', message);
        });
      },
      submitSignIn() {
        const message = this.$t('messages.thanksForSignIn');
        this.signIn({ form: this.$el.querySelector('#SignUpForm') }).then(() => {
          this.$emit('close');
          this.$store.commit('setMessage', message);
        });
      },
      validateUser() {
        // initialize errors
        this.errors = [];
        // required values
        this.requiredProps.forEach((prop) => {
          if (!this.user[prop]) {
            this.errors.push(this.$t('errors.isRequired', [this.$t(`models.user.attributes.${prop}`)]));
          }
        });
        // return result to avoid TypeError for undefined
        if (this.errors.length > 0) { return false; }

        // email format
        if (!this.user.email.match(Constants.EMAIL_REGEXP)) {
          this.errors.push(this.$t('errors.isInvalid', [this.$t('models.user.attributes.email')]));
        }
        // password confirmation
        if (this.isSignUpTab && this.user.password !== this.user.passwordConfirmation) {
          this.errors.push(
            this.$t('errors.isInvalid', [this.$t('models.user.attributes.passwordConfirmation')]),
          );
        }
        // password minimum length
        if (this.isSignUpTab && this.user.password.length < Constants.PASSWORD_MIN_LENGTH) {
          this.errors.push(
            this.$t('errors.shouldBeMoreThanChars', [
              this.$t('models.user.attributes.password'),
              Constants.PASSWORD_MIN_LENGTH,
            ]),
          );
        }
        // password maximum length
        if (this.isSignUpTab && this.user.password.length > Constants.PASSWORD_MAX_LENGTH) {
          this.errors.push(
            this.$t('errors.shouldBeLessThanChars', [
              this.$t('models.user.attributes.password'),
              Constants.PASSWORD_MAX_LENGTH,
            ]),
          );
        }
        // return result
        return this.errors.length === 0;
      },
      removeErrorMessage(i) {
        this.errors.splice(i, 1);
      },
    },
    components: {
      Modal,
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';

  .submit-btn {
    width: 100px;
    float: right;
  }
  .sign-in-tab {
    margin-bottom: 15px;
  }
  .sign-in-tab-item {
    margin: 0px -15px;
    padding: 8px 0px;
    border: 1px solid $BaseColor;
    text-align: center;
    cursor: pointer;
    transition: all .3s 0s ease;
  }
  .sign-in-tab-item:hover {
    background: $BaseColorLight;
  }
  .sign-in-tab-item.active {
    background: $BaseColor;
    color: #FFF;
  }
  .sign-in-tab-item.active:hover {
    background: $BaseColorDark;
  }
</style>
