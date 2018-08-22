const generatePrice = initial =>
  +(initial * Math.random()).toFixed(5);

const getPriceDirection = (next, prev) =>
  next === prev
    ? 0
    : next > prev
      ? 1
      : -1;

export default function* (initialRates) {
  let rates = initialRates;

  while(true) {
    rates = initialRates.map((rate, index) => {
      const buy = generatePrice(initialRates[index].buy);
      const sell = generatePrice(initialRates[index].sell);

      return {
        ...rate,
        buy,
        sell,
        priceDirection: getPriceDirection(buy, rates[index].buy),
      };
    });

    yield rates;
  }
}
