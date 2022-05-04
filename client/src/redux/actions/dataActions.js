import { ActionTypes } from "../constants/action-types"

export const setData = (data)=>{
    return {
        type: ActionTypes.SET_DATA,
        payload: data,
    }
}
export const setIsFetching = (isFetching)=>{
    return {
        type: ActionTypes.SET_IS_FETCHING,
        payload: isFetching,
    }
}
export const setPageNumber = (pageNumber)=>{
    return {
        type: ActionTypes.SET_CURRENT_PAGE,
        payload: pageNumber,
    }
}
