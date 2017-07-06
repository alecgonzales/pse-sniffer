import axios from 'axios';

export const SNIFF_START = "SNIFF_START";
export const getSniffStart = () => {
    return { type: SNIFF_START }
}

export const SNIFF_RESULTS = "SNIFF_RESULTS";
export const getSniffResults = (data) => {
    return { type: SNIFF_RESULTS, data }
}

export const SNIFF_ERROR = "SNIFF_ERROR";
export const sniffError = (data) => {
    return { type: SNIFF_ERROR, data }
}

export const SNIFF = "SNIFF";
export const sniff = (proximity) => {
  return dispatch => {
      dispatch(getSniffStart());
      const result = [];
      let id = 139;
      axios.get(`/api/stocks/${id}`)
          .then(res => {
            if (calculateProximity(res.data.records[0]) < proximity) {
              result.push(id);
            }
            dispatch(getSniffResults(result));
          })
          .catch(err => dispatch(sniffError(err)))
  }
}

function calculateProximity(stock) {
  return 100 * (Number(stock.headerLastTradePrice) - Number(stock.headerFiftyTwoWeekLow))
    / (Number(stock.headerFiftyTwoWeekHigh) - Number(stock.headerFiftyTwoWeekLow));
}
