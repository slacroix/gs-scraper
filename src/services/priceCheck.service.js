import axios from 'axios';

export default {
  check(query) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.VUE_APP_ROOT_URL}api/pricecheck`, { query })
        .then(result => {
          if (result && result.data && !result.data.error) {
            resolve(result.data.payload);
          } else {
            reject({
              error: true,
              message: 'ERROR: There was a problem fetching eBay data for this search.'
            });
          }
          resolve(result);
        })
        .catch(err => {
          console.warn('price check error', err);
          reject(err);
        });
    });
  }
};
