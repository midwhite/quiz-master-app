import api from './api';

export default {
  getUsers: () => {
    api.get('/');
  },
};
