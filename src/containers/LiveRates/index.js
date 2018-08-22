import React from 'react';
import RatesProvider from '../../hoc/RatesProvider';
import Dashboard from '../../components/Dashboard';

class LiveRates extends React.Component {

  render () {
    return (
      <RatesProvider interval={1000}>
        <Dashboard />
      </RatesProvider>
    );
  }
  
}

export default LiveRates;
