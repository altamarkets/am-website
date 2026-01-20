import Cookies from 'js-cookie';
import {getToken} from '@/api/auth/getToken';
import {submitForm} from '@/api/form/submitForm';
import * as httpResponses from '@/shared/httpResponses';

export default null;

export const submitFormService = async (data = null) => {
  console.debug('submitFormService called with data:', data); //DELETE

  if (!data) {
    console.error('No data provided to submitFormService');
    return false;
  }

  let getTokenResponse = await getToken();

  if (getTokenResponse.status !== httpResponses.HTTP_OK) {
    return false;
  }

  Cookies.set('token', getTokenResponse.data.token);

  let submitFormResponse = await submitForm({
    first_name: data.name,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    best_execution: data.bestExecutionCheckbox,
    custom_execution: data.customExecutionCheckbox,
    message: data.text,
  });

  return submitFormResponse.status === httpResponses.HTTP_OK;
};
