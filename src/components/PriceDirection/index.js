import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export default class PriceDirection extends PureComponent {
  static propTypes = {
    direction: PropTypes.oneOf([-1, 0, 1]),
  }

  render () {
    const {direction} = this.props;
    const className = classNames('price-direction', {
      'price-direction--increased': direction > 0,
      'price-direction--decreased': direction < 0,
    });

    return (
      <i className={className}>
        <svg width="7px" height="13px" xmlns="http://www.w3.org/2000/svg">
          <polygon className="arrow" fill="#cccccc" points="3.5 0 7 13 0 13"></polygon>
        </svg>
      </i>
    );
  }
}
