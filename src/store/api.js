import axios from 'axios';
import camelize from 'camelize';
import Constants from '@/constants';
import StorageService from '@/services/storage.service';
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
    return this.api().post(path, new FormData(form))
      .then(response => camelize(response.data))
      .catch(this.handleErrors);
  }

  static handleErrors(error) {
    // [TODO] show error messages as flash messages
    return Promise.reject(error);
  }

  /* eslint-disable new-cap */
  static api() {
    const token = StorageService.getToken();
    const locale = StorageService.getLocale();
    return new axios.create({
      baseURL: `${Constants.API_DOMAIN}/${locale}`,
      headers: { Authorization: token },
    });
  }
  /* eslint-enable */
}
