import axios from 'axios';
import {getHeader} from '@/util/authService';
import PubSub from 'pubsub-js';
import {TOAST, LOADING, RELOGIN} from '@/util/event-types';
import storage from '@/util/localStorage';

const service = axios.create();

//service.defaults.baseURL = 'https://server.americansunion.com/';
service.defaults.baseURL = 'https://d162yf00fuggac.cloudfront.net/';

service.interceptors.response.use(
  response => {
    PubSub.publish(LOADING, false);
    const {status} = response;
    if (status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  error => {
    PubSub.publish(LOADING, false);
    if (error.response) {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        // router.push('/signin');
        // PubSub.publish(TOAST, error.response.data.message);
      }
    }
    return Promise.reject(error);
  },
);

service.interceptors.request.use(
  function(config) {
    // PubSub.publish(LOADING, true);
    return new Promise((resolve, _reject) => {
      storage.getData('token').then(d => {
        config.headers = {
          'Content-Type': 'application/json',
          authorization: d,
        };
        if (
          config.method === 'get' &&
          config.url.indexOf('getReceipt') !== -1
        ) {
          config.responseType = 'arraybuffer';
        }
        resolve(config);
      });
    });
  },
  function(error) {
    PubSub.publish(LOADING, false);
    return Promise.reject(error);
  },
);

export default {
  //get request
  get(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params: param,
      })
        .then(res => {
          const data = res.data;
          if (data && data !== '') {
            resolve(data);
          } else {
            resolve(res);
          }
          // console.log('get response data', JSON.stringify(data));
        })
        .catch(_err => {
          PubSub.publish(TOAST, 'exception');
        });
    });
  },
  //post request
  post(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: param,
      })
        .then(res => {
          const data = res.data;
          if (data && data !== '') {
            resolve(data);
          } else {
            resolve(res);
          }
          // console.log('post response data', JSON.stringify(data));
        })
        .catch(_err => {
          // PubSub.publish(TOAST, _err.response);
          const status = _err.response.status;
          if (status === 401 || status === 403) {
            // router.push('/signin');
            PubSub.publish(TOAST, _err.response.data.message);
            PubSub.publish(RELOGIN);
          }
          // console.log('_err.response### ', _err);
        });
    });
  },
  uploadFile(url, param) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: param,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err, 'exception');
        });
    });
  },
};
