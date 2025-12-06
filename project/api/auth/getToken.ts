import { api } from '~/api';

export const getToken = async () => {
  try {
    const response = await api.get('auth/token');
    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
