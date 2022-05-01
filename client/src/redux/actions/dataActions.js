import { ActionTypes } from "../constants/action-types"

export const setData = (data)=>{
    return {
        type: ActionTypes.SET_DATA,
        payload: data,
    }
}

export const selectedData = (dataItem)=>{
    return {
        type: ActionTypes.SELECTED_DATA_ITEM,
        payload: dataItem,
    }
}