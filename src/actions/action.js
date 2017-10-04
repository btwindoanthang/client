import { DETAIL_TODO,FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/constants'

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export function getTodo(id) {
    return {
        type: DETAIL_TODO,
        id
    }
}

export function fetchData() { }

export function detailTodo(id) {
    return (dispatch) => {
        dispatch(getTodo(id));
        // getPeople()
        //   .then((data) => {
        //     dispatch(getDetail(data))
        //   })
        //   .catch((err) => console.log('err:', err))
      }
}