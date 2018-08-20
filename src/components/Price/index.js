import React from 'react';
import PropTypes from 'prop-types';

const formatValue = (value, precision) =>
  Number(value).toFixed(precision);

const Price = ({value, precision}) =>
  <div className="price">
    {[...formatValue(value, precision)].map((s, index) =>
      <span key={index} className="price-char">{s}</span>)}
  </div>;

Price.propTypes = {
  value: PropTypes.number,
  precision: PropTypes.number,
};

export default Price;
