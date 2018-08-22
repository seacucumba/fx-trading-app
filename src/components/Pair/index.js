import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Rate from '../Rate';
import PriceDirection from '../PriceDirection';
import './styles.css';

const getSymbol = pairName =>
  pairName
    ? pairName.split(' ')[0]
    : '';

export default class Pair extends PureComponent {

  static propTypes = {
    pair: PropTypes.string,
    buy: PropTypes.number,
    sell: PropTypes.number,
  }

  render() {
    const {pair, buy, sell, priceDirection} = this.props;
    const symbol = getSymbol(pair);

    return (
      <div className="pair">
        <header className="pair-header">{pair}</header>
        <PriceDirection direction={priceDirection} />
        <div className="pair-rates">
          <Rate type="sell" symbol={symbol} price={sell} />
          <Rate type="buy" symbol={symbol} price={buy} />
        </div>
      </div>
    );
  }
}
