import { observable, action } from 'mobx';

// Utils
import { numberWithCommas } from 'utils/price';

export default new class Calc {
  @observable data = {
    pay: 800000,
    expand: true,
    monthly: {
      first: numberWithCommas(3080), // 0.00385
      second: numberWithCommas(3920), // 0.0049
    },
    downpayment: {
      first: numberWithCommas(160000), // 20%
      second: numberWithCommas(80000), // 10%
    },
    landed: {
      first: 0, // 10%
      second: 0, // 0.00385
    },
  };

  @action calculate = (value, defaultValue) => {
    const data = value !== '' ? value : defaultValue;

    const getPrice = (price) => (
      price > 100
        ? numberWithCommas(price.toFixed(0))
        : numberWithCommas(price.toFixed(1))
    );

    if (data !== '') {
      this.data = {
        pay: value || defaultValue,
        expand: true,
        monthly: {
          first: getPrice(data * 0.00385),
          second: getPrice(data * 0.0049),
        },
        downpayment: {
          first: getPrice(20 / 100 * data),
          second: getPrice(10 / 100 * data),
        },
        landed: {
          first: getPrice(20 / 100 * data),
          second: getPrice(data * 0.00385),
        },
      };
    }
  }
};
