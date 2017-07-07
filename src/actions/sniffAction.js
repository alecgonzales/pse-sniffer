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
      axios.get(`/api/stocks`)
          .then(res => {
            let ctr = res.data.length;
            res.data.forEach((stock) => {
              getId(stock.securitySymbol)
                .then(r => {
                  let stockProximity = calculateProximity(r);
                  console.log(`${stock.securitySymbol}: ${stockProximity}`)
                  if (stockProximity < proximity) {
                    result.push({symbol: stock.securitySymbol, proximity: stockProximity});
                  }
                  ctr--;
                  if (ctr === 0) {
                    dispatch(getSniffResults(result));
                  }
                })
                .catch(e => {
                  ctr--;
                  if (ctr === 0) {
                    dispatch(getSniffResults(result));
                  }
                });
            });
          })
          .catch(err => dispatch(sniffError(err)))
  }
}

function getId(symbol) {
  console.log(symbol);
  return axios.get(`/api/stocks/${symbol}`)
    .then(res => {
      console.log(res.data.records[0].securityId);
      let id = res.data.records[0].securityId;
      return getStock(id);
    })
    .catch(err => false)
}

function getStock(id) {
  return axios.get(`/api/stocks/${id}`)
      .then(res => {
        console.log(res.data.records[0]);
        return res.data.records[0];
      })
      .catch(err => false)
}

function calculateProximity(stock) {
  return 100 * (Number(stock.headerLastTradePrice) - Number(stock.headerFiftyTwoWeekLow))
    / (Number(stock.headerFiftyTwoWeekHigh) - Number(stock.headerFiftyTwoWeekLow));
}
