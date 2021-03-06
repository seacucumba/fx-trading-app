import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from '../components/Price';
import Rate from '../components/Rate';
import Pair from '../components/Pair';
import PriceDirection from '../components/PriceDirection';
import Dashboard from '../components/Dashboard';
import RatesProvider from '../hoc/RatesProvider';
import '../index.css';

storiesOf('Price', module)
  .add('Price', () => <Price value={5.01234} />);

storiesOf('Rate', module)
  .add('Sell', () => <Rate type="sell" symbol="USD" price={0.99043} />)
  .add('Buy', () => <Rate type="buy" symbol="USD" price={0.99043} />);

storiesOf('Pair', module)
  .add('Default', () => <Pair pair="USD CHF" buy={0.99143} sell={0.99043} />)
  .add('Price Increased', () => <Pair pair="USD CHF" buy={0.99143} sell={0.99043} priceDirection={1} />)
  .add('Price Decreased', () => <Pair pair="USD CHF" buy={0.99143} sell={0.99043} priceDirection={-1} />);

storiesOf('PriceDirection', module)
  .add('Price Increased', () => <PriceDirection direction={1} />)
  .add('Price Decreased', () => <PriceDirection direction={-1} />);

const pairs = [
  {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
  {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
  {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
  {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
  {"pair":"USD JPY", "buy":110.467, "sell":110.417},
  {"pair":"EUR JPY", "buy":120.589, "sell":120.491},
];

storiesOf('Dashboard', module)
  .add('Default', () => <Dashboard pairs={pairs} />);

storiesOf('Live Rates', module)
  .add('Default', () => (
    <RatesProvider interval={1000}>
      <Dashboard />
    </RatesProvider>
  ));
