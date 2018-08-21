import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const formatValue = (value) =>
  '' + value;

const getCharClasses = char => ({
  'price-char--digit': /\d/.test(char),
});

const Price = ({value}) =>
  <div className="price">
    {[...formatValue(value)].map((s, index) =>
      <span key={index}
            className={classNames('price-char', getCharClasses(s))}>{s}</span>)}
  </div>;

Price.propTypes = {
  value: PropTypes.number,
};

export default Price;
