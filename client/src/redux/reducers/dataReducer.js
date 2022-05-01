import { ActionTypes } from "../constants/action-types";

const intitialState = {
  data: [],
};

export const dataReducer = (state = intitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return {...state, data:payload};
    default:
      return state;
  }
};
