import { ActionTypes } from "../constants/action-types";

const intitialState = {
  data: [],
  isFetching: false,
  page: 1,
};

export const dataReducer = (state = intitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: payload };
    case ActionTypes.SET_IS_FETCHING:
      return { ...state, isFetching: payload };
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, page: payload };
    default:
      return state;
  }
};
