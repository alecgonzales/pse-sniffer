import React, { Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class Sniff extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Sniff', className)} {...props}>
        <h1>
          Filters
        </h1>
        <div>
          <span>Current Price proximity to 52 week low:</span>
          <span><input type='text'/></span>
        </div>
        <div>
          <button onClick={this.props.actions.getStock}>Start Sniffing!!!</button>
          <div style={{ padding: '30px' }}>{this.props.results}</div>
        </div>

      </div>
    );
  }
}

function getProximityTo52WeekLow(stock) {

}
