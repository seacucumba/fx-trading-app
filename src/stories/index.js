import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Price from '../components/Price';
import Rate from '../components/Rate';
import Pair from '../components/Pair';
import '../index.css';

storiesOf('Price', module)
  .add('Price', () => <Price value={5} precision={5} />);


storiesOf('Rate', module)
  .add('Sell', () => <Rate type="sell" symbol="USD" price="0.99043" />)
  .add('Buy', () => <Rate type="buy" symbol="USD" price="0.99043" />);

storiesOf('Pair', module)
  .add('Default', () => <Pair name="USD CHF" buyPrice={0.99143} sellPrice={0.99043} />);

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
