const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

let devUrl;

if (__CLIENT__ && !__PRODUCTION__) {
  devUrl = 'http://localhost:3000/dist/';
}

if (!__CLIENT__ && !__PRODUCTION__) {
  devUrl = 'http://localhost:3001/dist/';
}

if (__PRODUCTION__) {
  devUrl = '/dist/';
}

export const DEV_URL = devUrl;

// TODO: production
export const API_URL = __PRODUCTION__
  ? '/api/v1/'
  : '/api/v1/';
