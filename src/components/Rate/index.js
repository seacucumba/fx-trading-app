import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Price from '../Price';
import RateBgImage from './rate-bg-image';
import './styles.css';

export default class Rate extends PureComponent {

  static propTypes = {
    type: PropTypes.oneOf(['sell', 'buy']),
    symbol: PropTypes.string,
    price: PropTypes.number,
  }

  render() {
    const {type, symbol, price} = this.props;

    return (
      <div className={classNames('rate', `rate--${type}`)}>
        <RateBgImage />
        <div className="rate-desc">
          <span>{type === 'sell' ? 'Sell' : 'Buy'}&nbsp;</span>
          <span>{symbol}</span>
        </div>
        <Price value={price} />
      </div>
    );
  }

}
