import Constants from '@/constants';

class PrivateStorageService {
  static getValue(key) {
    return localStorage.getItem(key) || window.QuizMasterStorage[key];
  }

  static save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // silence error in case user uses private mode browser
      if (!window.QuizMasterStorage) { window.QuizMasterStorage = {}; }
      window.QuizMasterStorage[key] = value;
    }
  }

  static remove(key) {
    localStorage.removeItem(key);
    // in case user uses private mode browser
    if (!window.QuizMasterStorage) { window.QuizMasterStorage = {}; }
    delete window.QuizMasterStorage[key];
  }
}

export default class StorageService {
  static getToken() {
    return PrivateStorageService.getValue(Constants.TOKEN_KEY);
  }

  static setToken(token) {
    PrivateStorageService.save(Constants.TOKEN_KEY, token);
  }

  static removeToken() {
    PrivateStorageService.remove(Constants.TOKEN_KEY);
  }

  static getLocale() {
    return PrivateStorageService.getValue(Constants.LOCALE_KEY) || Constants.DEFAULT_LOCALE;
  }

  static setLocale(locale) {
    PrivateStorageService.save(Constants.LOCALE_KEY, locale);
  }
}
