import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../Rate';
import './styles.css';

const getSymbol = name =>
  name
    ? name.split(' ')[0]
    : '';

const Pair = ({name, buyPrice, sellPrice}) => {
  const symbol = getSymbol(name);

  return (
    <div className="pair">
      <header className="pair-header">{name}</header>
      <Rate type="sell" symbol={symbol} price={sellPrice} />
      <Rate type="buy" symbol={symbol} price={buyPrice} />
    </div>
  );
};

Pair.propTypes = {
  name: PropTypes.string,
  buyPrice: PropTypes.number,
  sellPrice: PropTypes.number,
};

export default Pair;
