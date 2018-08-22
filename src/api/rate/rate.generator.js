const generatePrice = (initial, delta) =>
  +(initial * (1 + 2 * delta * Math.random() - delta)).toFixed(5);

const getPriceDirection = (next, prev) =>
  next === prev
    ? 0
    : next > prev
      ? 1
      : -1;

export default function* (initialRates, delta) {
  let rates = initialRates;

  const produceNextRates = (rate, index) => {
    const buy = generatePrice(initialRates[index].buy, delta);
    const sell = generatePrice(initialRates[index].sell, delta);

    return {
      ...rate,
      buy,
      sell,
      priceDirection: getPriceDirection(buy, rates[index].buy),
    };
  };

  while(true) {
    rates = initialRates.map(produceNextRates);
    yield rates;
  }
}
