import { history } from '../index.js';

export const navigate = (url, newTab) => {
  if (!newTab) {
    history.push(url);
  } else {
    window.open(url, '_blank');
  }
};
