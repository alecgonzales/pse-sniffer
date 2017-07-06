import * as Actions from '../actions/sniffAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Sniff from '../components/Sniff/Sniff'

function mapStateToProps(state) {
  return {
    results: state.stock.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sniff);
