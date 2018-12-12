import axios from 'axios';
import { BASE_URL, JSON_URL } from '../store/constants.js';

class HttpClient {
  constructor() {
    this.baseUrl = '';
    this.http = axios;
  }
  initialize(baseUrl) {
    this.baseUrl = baseUrl || BASE_URL;
  }

  get(url) {
    return axios({
      method: 'get',
      url: this.baseUrl + url,
    });
  }
  post(url, data) {
    return axios({
      methos: 'post',
      url: this.baseUrl + url,
      data,
    });
  }

  getCatalog() {
    return this.get(JSON_URL);
  }
}
export default new HttpClient();
