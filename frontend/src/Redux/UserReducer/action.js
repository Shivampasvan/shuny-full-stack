import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./actionTypes";

export const getRequestAction = () => {
  return { type: GET_USER_REQUEST };
};

export const getSuccessAction = (payload) => {
  return { type: GET_USER_SUCCESS, payload };
};

export const getFailureAction = () => {
  return { type: GET_USER_FAILURE };
};

export const getUsers = (dispatch) => {
  dispatch(getRequestAction());

  axios
    .get(`https://beige-ox-sock.cyclic.app/users/list`)
    .then((res) => {
      dispatch(getSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getFailureAction());
    });
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`https://beige-ox-sock.cyclic.app/users/delete/${id}`)
    .then((res) => {
      dispatch(getUsers);
    })
    .catch((err) => {
      console.log(err);
    });
};


