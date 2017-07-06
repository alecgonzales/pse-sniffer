import { GET_STOCK_RESULTS, GET_STOCK_ERROR, SNIFF_RESULTS, SNIFF_ERROR } from '../actions';

const initialState = {
    results: ''
}

const stock = (state = initialState, action) => {
    switch (action.type) {
        case GET_STOCK_RESULTS:
            return { ...state, results: action.data }
        case GET_STOCK_ERROR:
            return { ...state, results: action.data }
        case SNIFF_RESULTS:
            return { ...state, results: action.data }
        case SNIFF_ERROR:
            return { ...state, results: action.data }
        default:
            return state
    }
}

export default stock;
