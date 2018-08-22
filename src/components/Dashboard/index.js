import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Pair from '../Pair';
import './styles.css';

export default class Dashboard extends PureComponent {

  static propTypes = {
    pairs: PropTypes.array,
  }

  render () {
    const {pairs} = this.props;

    return (
      <div className="dashboard">
        {pairs.map(pair =>
          <Pair {...pair} key={pair.pair} />
        )}
      </div>
    );
  }
}
