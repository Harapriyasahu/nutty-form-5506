import * as types from "./actionTypes";
import axios from "axios";
import { getItemFromLocal } from "../../utils/localStorage";

const token = getItemFromLocal("token");
console.log(token);
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const getTask = (id) => (dispatch) => {
  dispatch({ type: types.GET_TASK_REQUEST });
  return axios({
    method: "get",
    url: `/tasks/${id}`,
    headers: headers,
  })
    .then((res) => {
      // console.log("get",res.data);
      dispatch({ type: types.GET_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_TASK_FAILURE });
    });
};

export const addTask = (payload, id) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  return axios({
    method: "post",
    url: `/tasks/${id}/create`,
    data: payload,
    headers: headers,
  })
    .then((res) => {
      dispatch({ type: types.ADD_TASK_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.ADD_TASK_FAILURE });
    });
};

export const updateTask = (payload, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_TASK_REQUEST });
  return axios({
    method: "patch",
    url: `/tasks/update/${id}`,
    data: payload,
    headers: headers,
  })
    .then((res) => {
      dispatch({ type: types.UPDATE_TASK_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_TASK_FAILURE });
    });
};

export const deleteTask = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_TASK_REQUEST });
  return axios({
    method: "delete",
    url: `/tasks/delete/${id}`,
    headers: headers,
  })
    .then((r) => {
      return dispatch({ type: types.DELETE_TASK_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_TASK_FAILURE });
    });
};
