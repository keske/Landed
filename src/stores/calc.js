import { observable, action } from 'mobx';

// Utils
import { numberWithCommas } from 'utils/price';

class Calc {
  @observable price = 0;

  @observable data = {
    expand: false,
    monthly: {
      first: 0, // 0.00385
      second: 0, // 0.0049
    },
    downpayment: {
      first: 0, // 20%
      second: 0, // 10%
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
        }
      };
    }
  }
}

export default new Calc();
