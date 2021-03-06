export default class Constants {
  static get API_DOMAIN() {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.quiz-master.com';
  }

  static get TOKEN_KEY() { return 'token'; }

  static get LOCALE_KEY() { return 'locale'; }
  static get DEFAULT_LOCALE() { return 'en'; }

  static get DEFAULT_TIMEZONE() { return 'UTC'; }

  static get EMAIL_REGEXP() { return /^[^@\s]+@[^@\s]+$/; }

  static get PASSWORD_MIN_LENGTH() { return 6; }
  static get PASSWORD_MAX_LENGTH() { return 128; }
}
