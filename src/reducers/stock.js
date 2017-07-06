import { SNIFF_RESULTS, SNIFF_ERROR } from '../actions/sniffAction';

const initialState = {
    results: ''
}

const stock = (state = initialState, action) => {
    switch (action.type) {
        case SNIFF_RESULTS:
            return { ...state, results: action.data }
        case SNIFF_ERROR:
            return { ...state, results: action.data }
        default:
            return state
    }
}

export default stock;
