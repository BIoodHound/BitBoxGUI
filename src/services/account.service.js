import axios from 'axios';
import authHeader from '../services/auth-header.js'
const API_URL = 'http://localhost:7070/';

class AccountService {
    getAllAccounts() {
        return axios.get(API_URL + 'api/users', { headers: authHeader() })
            .then(response => {
                return response.data;
            })
            .catch(function (error) {
                return error;

            });
    }
    removeUser(username) {
        return axios.post(API_URL + "api/users/" + username, null, { headers: authHeader() });
    }
}
export default new AccountService();