import React, {PureComponent, Children} from 'react'
import PropTypes from 'prop-types'
import RateApi, {INITIAL_RATES} from '../../api/rate';

class RatesProvider extends PureComponent {
  state = {
    rates: INITIAL_RATES,
  }

  static propTypes = {
    interval: PropTypes.number,
  }

  static defaultProps = {
    interval: 1000,
  }

  componentDidMount() {
    const {interval} = this.props;
    const callback = this.refreshRates.bind(this);
    const intervalId = setInterval(callback, interval);
    this.setState({intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  refreshRates() {
    const rates = RateApi.getRates();
    this.setState({ rates });
  }

  render () {
    const {rates} = this.state;
    const children = Children.map(this.props.children, child =>
      React.cloneElement(child, {pairs: rates}));
    return children;
  }
}

export default RatesProvider;
