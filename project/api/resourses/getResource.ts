import { api } from '@/api';

export const getResource = async (path: string, config: any) => {
  try {
    const response = await api.get(path, config);
    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
