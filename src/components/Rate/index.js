import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Price from '../Price';
import './styles.css';

const Rate = ({type, symbol, price}) =>
  <div className={classNames('rate', `rate--${type}`)}>
    <div className="rate-desc">
      <span>{type === 'sell' ? 'Sell' : 'Buy'}&nbsp;</span>
      <span>{symbol}</span>
    </div>
    <Price value={price} />
  </div>;

Rate.propTypes = {
  type: PropTypes.oneOf(['sell', 'buy']),
  symbol: PropTypes.string,
  price: PropTypes.number,
};

export default Rate;
