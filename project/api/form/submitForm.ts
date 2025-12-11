import { api } from '~/api';

export const submitForm = async (data = {}) => {
  if (
    !data.first_name ||
    !data.last_name ||
    !data.email ||
    !data.phone
  ) {
    return false;
  }

  const payload = {
    formname: "application.home.get_in_touch.en",
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    best_execution: !!data.best_execution,
    custom_execution: !!data.custom_execution,
    message: data.message || '',
  };

  try {
    const response = await api.post('form/submit', payload);
    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
