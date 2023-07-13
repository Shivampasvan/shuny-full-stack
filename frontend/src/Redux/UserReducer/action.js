import axios from "axios";
import {
    ADD_USER_DETAILS,
    EDIT_USER,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,UPDATE_CONDITION
} from "./actionTypes";

export const getRequestAction = () => {
    return {type: GET_USER_REQUEST};
};

export const getSuccessAction = (payload) => {
    return {type: GET_USER_SUCCESS, payload};
};

export const getFailureAction = () => {
    return {type: GET_USER_FAILURE};
};

export const conditionUpdate = () =>{
    return {type:UPDATE_CONDITION}
}

export const viewUserDetails = (payload) => {
    return {type: ADD_USER_DETAILS, payload}
}

export const editUserDetails = (payload) => {
    return {type: EDIT_USER, payload}
}

export const updateUserDetails = (payload) =>(dispatch) =>{
    axios.patch(`https://beige-ox-sock.cyclic.app/users/update/${payload._id}`, payload).then((res) => {
        // dispatch(getUsers);
        console.log("res update check",res.data);
    }).catch((err) => {
        console.log(err);
    });
}

export const addNewUser = (payload) => (dispatch) => {
    axios.post(`https://beige-ox-sock.cyclic.app/users/add`, payload).then((res) => {
        console.log("res", res.data)
        dispatch(getUsers);
    }).catch((err) => {
        console.log(err);
    });
}

export const getUsers = (dispatch) => {
    dispatch(getRequestAction());

    axios.get(`https://beige-ox-sock.cyclic.app/users/list`).then((res) => {
        dispatch(getSuccessAction(res.data));
    }).catch((err) => {
        dispatch(getFailureAction());
    });
};

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`https://beige-ox-sock.cyclic.app/users/delete/${id}`).then((res) => {
        dispatch(getUsers);
    }).catch((err) => {
        console.log(err);
    });
};
