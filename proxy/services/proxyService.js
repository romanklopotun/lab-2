const apiClient = require('../clients/apiClient');

const getRoot = async () => {
  const response = await apiClient.get('/');
  return response.data;
};

module.exports = {
  getRoot
};
