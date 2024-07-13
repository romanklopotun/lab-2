const axios = require('axios');
const config = require('../config');

const apiClient = axios.create({
  baseURL: config.get('apiUrl')
});

module.exports = apiClient;
