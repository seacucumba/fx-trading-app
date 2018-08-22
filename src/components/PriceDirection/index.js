import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export default class PriceDirection extends PureComponent {
  static propTypes: {
    // direction: PropTypes.oneOf([-1, 0, 1]),
  }

  render () {
    const {direction} = this.props;
    const className = classNames('price-direction', {
      'price-direction--increased': direction > 0,
      'price-direction--decreased': direction < 0,
    });

    return (
      <i className={className}></i>
    );
  }
}
