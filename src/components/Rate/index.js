import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Price from '../Price';
import './styles.css';

const BgImage = () => (
  <svg className="rate-bg-image" width="120" height="45" xmlns="http://www.w3.org/2000/svg">
    <path className="path"
          d="M3 .5A2.5 2.5 0 0 0 .5 3v39A2.5 2.5 0 0 0 3 44.5h95.87a2.5 2.5 0 0 0 1.76-.724l15.274-15.13a9.5 9.5 0 0 0-.271-13.757L100.627 1.156A2.5 2.5 0 0 0 98.94.5H3z"
          stroke="#ccc"
          fill="#ffffff"
          fillRule="evenodd"/>
  </svg>
);

const Rate = ({type, symbol, price}) =>
  <div className={classNames('rate', `rate--${type}`)}>
    <BgImage />
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
