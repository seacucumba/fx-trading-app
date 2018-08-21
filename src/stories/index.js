import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Price from '../components/Price';
import Rate from '../components/Rate';
import Pair from '../components/Pair';
import PairList from '../components/PairList';
import Dashboard from '../components/Dashboard';
import RatesProvider from '../components/RatesProvider';
import '../index.css';

storiesOf('Price', module)
  .add('Price', () => <Price value={5} precision={5} />);


storiesOf('Rate', module)
  .add('Sell', () => <Rate type="sell" symbol="USD" price="0.99043" />)
  .add('Buy', () => <Rate type="buy" symbol="USD" price="0.99043" />);

storiesOf('Pair', module)
  .add('Default', () => <Pair pair="USD CHF" buy={0.99143} sell={0.99043} />);

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

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
