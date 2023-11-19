import axios from 'axios';

axios.defaults.baseURL =
  '<https://64ca4e55700d50e3c704af47.mockapi.io/contacts>';

export const getCarsAPI = async ({ limit = 12, ...rest }) => {
  const response = await axios.get('', { params: { limit, ...rest } });
  console.log(response.data);
  return response.data;
};