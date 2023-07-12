import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      // console.log("payload",payload);
      return { ...state, isLoading: false, users: payload };
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
