import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../Rate';
import './styles.css';

const getSymbol = pairName =>
  name
    ? name.split(' ')[0]
    : '';

const Pair = ({pair, buy, sell}) => {
  const symbol = getSymbol(pair);

  return (
    <div className="pair">
      <header className="pair-header">{pair}</header>
      <div className="pair-rates">
        <Rate type="sell" symbol={symbol} price={sell} />
        <Rate type="buy" symbol={symbol} price={buy} />
      </div>
    </div>
  );
};

Pair.propTypes = {
  pair: PropTypes.string,
  buy: PropTypes.number,
  sell: PropTypes.number,
};

export default Pair;
