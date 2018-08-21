import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Pair from '../Pair';
import './styles.css';

export default class Dashboard extends PureComponent {
  render () {
    const {pairs} = this.props;

    return (
      <div className="dashboard">
        {pairs.map((pair, index) =>
          <Pair {...pair} key={index} />
        )}
      </div>
    );
  }
}
