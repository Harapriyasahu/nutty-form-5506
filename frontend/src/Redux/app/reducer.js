import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./actionTypes";
import { getLocalData, saveData } from "../../utils/accessLocal";

const initialState = {
  isLoading: false,
  isError: false,
  token: getLocalData("token") || false,
  isAuth: getLocalData("token") ? true : false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_LOGIN_SUCCESS:
      saveData("token", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
