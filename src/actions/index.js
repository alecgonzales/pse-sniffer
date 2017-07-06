import axios from 'axios';

export const GET_STOCK_START = "GET_STOCK_START";
export const getStockStart = () => {
    return { type: GET_STOCK_START }
}

export const GET_STOCK_RESULTS = "GET_STOCK_RESULTS";
export const getStockResults = (data) => {
    return { type: GET_STOCK_RESULTS, data }
}

export const GET_STOCK_ERROR = "GET_STOCK_ERROR";
export const getStockError = (data) => {
    return { type: GET_STOCK_ERROR, data }
}

export const GET_STOCK = "GET_STOCK";
export const getStock = (id) => {
  return dispatch => {
      dispatch(getStockStart());
      axios.get(`/api/stocks/${id}`)
          .then(res => dispatch(getStockResults(JSON.stringify(res.data))))
          .catch(err => dispatch(getStockError(err)))
  }
}

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/products`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}
