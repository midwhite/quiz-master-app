import axios from 'axios';
import camelize from 'camelize';
import Constants from '@/constants';
import Util from '@/util';

export default class Api {
  static get(path, params = {}) {
    return this.api()
      .get(path, { params: Util.camelToSnake(params) })
      .then(response => camelize(response.data));
  }
  static post(path, params) {
    return this.api()
      .post(path, Util.camelToSnake(params))
      .then(response => camelize(response.data));
  }
  static put(path, params) {
    return this.api()
      .put(path, Util.camelToSnake(params))
      .then(response => camelize(response.data));
  }
  static delete(path, params = {}) {
    return this.api()
      .delete(path, { params: Util.camelToSnake(params) })
      .then(response => camelize(response.data));
  }
  static submit(path, form) {
    return this.api().post(path, form).then(response => camelize(response.data));
  }

  /* eslint-disable new-cap */
  static api() {
    const token = window.localStorage.getItem(Constants.TOKEN_KEY) || window[Constants.TOKEN_KEY];
    return new axios.create({
      baseURL: Constants.API_DOMAIN,
      headers: { Authorization: token },
    });
  }
  /* eslint-enable */
}
