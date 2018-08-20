import React from 'react';
import PropTypes from 'prop-types';
import Price from '../Price';
import './styles.css';

const Rate = ({type, symbol, price}) =>
  <div className="rate">
    <span>{type === 'sell' ? 'Sell' : 'Buy'}&nbsp;</span>
    <span>{symbol}</span>
    <Price value={price} precision={5}/>
  </div>;

Rate.propTypes = {
  type: PropTypes.oneOf(['sell', 'buy']),
  symbol: PropTypes.string,
  price: PropTypes.number,
};

export default Rate;
