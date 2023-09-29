import axios from 'axios'
// baseURL: import.meta.env.VITE_API_BASE_URL,
export const API_URL='http://52.195.229.198/'
export const IMAGE_API_URL='http://52.195.229.198'

const axiosClient = axios.create({
  baseURL: API_URL,
});


export default axiosClient;


export const mediaconfig = {
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
  },

};

export const config = {
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
};

