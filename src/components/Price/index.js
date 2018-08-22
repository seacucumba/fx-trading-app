import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const formatValue = (value) =>
  '' + value;

const getCharClasses = char => ({
  'price-char--digit': /\d/.test(char),
});

export default class Price extends PureComponent {

  static propTypes = {
    value: PropTypes.number,
  }

  render() {
    const {value} = this.props;

    return (
      <div className="price">
        {[...formatValue(value)].map((char, index) =>
          <span key={index}
                className={classNames('price-char', getCharClasses(char))}>{char}</span>)}
      </div>
    );
  }
}
