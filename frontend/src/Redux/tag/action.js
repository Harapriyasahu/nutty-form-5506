import * as types from "./actionTypes";
import axios from "axios";
import { getItemFromLocal } from "../../utils/localStorage";


const token = getItemFromLocal("token");
console.log(token);
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};




export const getTag = (params) => (dispatch) => {
  dispatch({ type: types.GET_TAG_REQUEST });
  return axios({
    method: "get",
    url: `/app/tags`,
    params: params,
    headers: headers,
  })
    .then((res) => {
      console.log("res",res)
      dispatch({ type: types.GET_TAG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_TAG_FAILURE });
    });
};


export const getSingleTag = (id) => (dispatch) => {
    dispatch({ type: types.GET_TAG_REQUEST });
    return axios({
      method: "get",
      url: `/app/tags/${id}`,
      headers: headers,
    })
      .then((res) => {
        dispatch({ type: types.GET_TAG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_TAG_FAILURE });
      });
  };
  


export const addTag = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TAG_REQUEST });

  return axios({
    method: "post",
    url: `/app/tags/create`,
    data: payload,
    headers: headers,
  })
    .then((res) => {
      return dispatch({ type: types.ADD_TAG_SUCCESS,payload:res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_TAG_FAILURE });
    });
};




export const updateTag = (payload,id) => (dispatch) => {
    dispatch({type:types.UPDATE_TAG_REQUEST})
    return axios({
        method: "patch",
        url: `/app/tags/edit/${id}`,
        data: payload,
        headers: headers,
      })
    .then((r) => {
        return dispatch({type:types.UPDATE_TAG_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.UPDATE_TAG_FAILURE})
    })
}


export const deleteTag = (id) => (dispatch) => {
    dispatch({type:types.DELETE_TAG_REQUEST})

    return axios({
        method: "delete",
        url: `/app/tags/delete/${id}`,
        headers: headers,
      })
    .then((r) => {
       return dispatch({type:types.DELETE_TAG_SUCCESS})
    })
    .catch((err) => {
        dispatch({type:types.DELETE_TAG_FAILURE})
    })
}




