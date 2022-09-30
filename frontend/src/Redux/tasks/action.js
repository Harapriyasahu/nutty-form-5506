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
    method: "get",
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
