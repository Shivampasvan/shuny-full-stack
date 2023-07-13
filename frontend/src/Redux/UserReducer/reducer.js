import {
  ADD_USER_DETAILS,
  EDIT_USER,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_CONDITION,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  condition:true,
  users: [],
  updateuser:[],
  userdetails:[],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
      case ADD_USER_DETAILS:
        return {...state,userdetails:payload,condition:true}
        case EDIT_USER:
          return{...state,updateuser:payload,condition:false}
          case UPDATE_CONDITION : 
          return {...state,condition:true,updateuser:[]}
    default:
      return state;
  }
};
