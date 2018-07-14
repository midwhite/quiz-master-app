import moment from 'moment-timezone';
import Constants from '@/constants';

export default class Util {
  /* eslint-disable no-param-reassign */
  // Rename keys from camel case to snake case
  static camelToSnake(obj) {
    const snakeObj = {};
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key])) {
        // in case value is array
        obj[key].forEach((element, i) => {
          if (typeof element === 'object' && element !== null) {
            // in case element is an object
            obj[key][i] = Util.camelToSnake(element);
          }
        });
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        // in case value is an object
        obj[key] = Util.camelToSnake(obj[key]);
      }
      const newKey = key.replace(/([A-Z])/g, s => `_${s.charAt(0).toLowerCase()}`);
      snakeObj[newKey] = obj[key];
    });
    return snakeObj;
  }
  /* eslint-enable */

  static randomNum(max) {
    return Math.floor(Math.random() * max);
  }

  static randomStr(length) {
    const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
    return [...Array(length)].map(() => string.substr(Util.randomNum(string.length), 1)).join('');
  }

  static timeWithZone(time, timezone) {
    return moment.tz(time, Constants.DEFAULT_TIMEZONE).clone().tz(timezone);
  }
}
