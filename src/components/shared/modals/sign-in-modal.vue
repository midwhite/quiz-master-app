<template>
  <modal @close="$emit('close')">
      <h3 slot="header">{{ $t('components.welcome.signUp') }}</h3>
      <div slot="body">
        <div class="errors">
          <div class="alert alert-danger" v-for="(error, i) of errors">
            <span>{{ error }}</span>
            <i class="close" @click="removeErrorMessage(i)">&times;</i>
          </div>
        </div>
        <form id="SignUpForm" @submit.prevent="submitSignUp">
          <div class="form-group">
            <label for="sign-up-email">{{ $t('models.user.attributes.email') }}</label>
            <input type="email" name="user[email]" v-model="user.email" id="sign-up-email" class="form-control" :placeholder="$t('models.user.attributes.email')" />
          </div>
          <div class="form-group">
            <label for="sign-up-password">{{ $t('models.user.attributes.password') }}</label>
            <input type="password" name="user[password]" v-model="user.password" id="sign-up-password" class="form-control" :placeholder="$t('models.user.attributes.password')" />
          </div>
          <div class="form-group">
            <label for="sign-up-password-confirmation">{{ $t('models.user.attributes.passwordConfirmation') }}</label>
            <input type="password" name="user[password_confirmation]" v-model="user.passwordConfirmation" id="sign-up-password-confirmation" class="form-control" :placeholder="$t('models.user.attributes.passwordConfirmation')" />
          </div>
          <input type="submit" style="display: none;"></button>
        </form>
      </div>
      <div slot="footer">
        <div class="main-btn sign-in-btn" @click="submitSignUp">{{ $t('components.welcome.signUp') }}</div>
      </div>
  </modal>
</template>

<script>
  import { mapActions } from 'vuex';
  import Constants from '@/constants';
  import Modal from '@/components/shared/modal';

  export default {
    data: () => ({
      errors: [],
      user: {},
    }),
    computed: {
      requiredProps: () => ['email', 'password', 'passwordConfirmation'],
    },
    methods: {
      ...mapActions(['signUp', 'signIn']),
      submitSignUp() {
        if (this.validateUser()) {
          this.signUp({ form: this.$el.querySelector('#SignUpForm') }).then(() => {
            this.$emit('close');
          });
        }
      },
      submitSignIn() {
        if (this.validateUser()) {
          this.signIn().then(() => {
            this.$emit('close');
          });
        }
      },
      validateUser() {
        // initialize errors
        this.errors = [];
        // validate required values
        this.requiredProps.forEach((prop) => {
          if (!this.user[prop]) {
            this.errors.push(this.$t('errors.isRequired', [this.$t(`models.user.attributes.${prop}`)]));
          }
        });
        // validate email format
        if (this.user.email && !this.user.email.match(Constants.EMAIL_REGEXP)) {
          this.errors.push(this.$t('errors.isInvalid', [this.$t('models.user.attributes.email')]));
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

<style scoped>
  .sign-in-btn {
    width: 100px;
    float: right;
  }
</style>
