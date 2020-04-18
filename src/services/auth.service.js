import axios from 'axios';
import authHeader from '../services/auth-header.js'
const API_URL = 'http://localhost:7070/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  create(user) {
    return axios.post(API_URL + 'api/auth/' + 'create', {
      username: user.username,
      password: user.password,
      role: user.role
    },
      { headers: authHeader() });
  }
}

export default new AuthService();
