import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"
import constants from "@/constants"

const client = axios.create({
    baseURL : constants.api.url
})


const request = function(options : AxiosRequestConfig) {

    const onSuccess = function(response : AxiosResponse) {
        console.debug('Request Successful!', response);
        return response.data;
    }
  
    const onError = function(error : AxiosError) {

      console.error('Request Failed:', error.config);
  
      if (error.response) {
        // Request was made but server responded with something
        // other than 2xx
        console.error('Status:',  error.response.status);
        console.error('Data:',    error.response.data);
        console.error('Headers:', error.response.headers);
  
      } else {
        // Something else happened while setting up the request
        // triggered the error
        console.error('Error Message:', error.message);
      }
  
      return Promise.reject(error.response || error.message);
    }
  
    return client(options)
              .then(onSuccess)
              .catch(onError);
  }
  
  export default request;