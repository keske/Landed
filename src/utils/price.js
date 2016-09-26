export const numberWithCommas = (numbers) =>
  numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
