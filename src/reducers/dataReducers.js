// reducer/dataReducer.js
import { DETAIL_TODO,FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/constants'
const initialState = {
    data: [],
    detail: '',
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case DETAIL_TODO:
            return {
                ...state,
                detail: action.id,
                error: true
            }
        default:
            return state
    }
}