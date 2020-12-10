import axios from 'axios';
import { FormValues } from '../types';

export const sendEmail = async (formValues: FormValues) => {
  var bodyFormData = new FormData();
  Object.entries(formValues).forEach(([key, value]) => {
    bodyFormData.append(key, value);
  });

  return axios({
      method: 'post',
      url: 'https://www.3-damja.com/contact.php',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
      if (!response.data.success) {
        return Promise.reject(response);
      }

      return response;
    });
};
