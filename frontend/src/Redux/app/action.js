// code here
import axios from "axios";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./actionTypes";

export const signupFun = (payload) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  return axios
    .post(`https://reqres.in/api/register`, payload)
    .then((res) => {
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
      return USER_SIGNUP_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: USER_SIGNUP_FAILURE, payload: err });
      return USER_SIGNUP_FAILURE;
    });
};

export const loginFun = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  return axios
    .post(`https://reqres.in/api/login`, payload)
    .then((res) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });
      return USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAILURE, payload: err });
      return USER_LOGIN_FAILURE;
    });
};
