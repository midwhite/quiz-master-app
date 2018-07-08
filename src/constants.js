export default class Constants {
  static get API_DOMAIN() {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.quiz-master.com';
  }

  static get TOKEN_KEY() { return 'token'; }
}
