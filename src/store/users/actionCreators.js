import axios from "axios";
import {
  GET_USERS,
  SHOW_NEXT_USERS,
  SHOW_PREV_USERS,
  FILTER_USERS_NAME,
  IS_LOADING_USERS,
} from "./actions";

export const getUsersAC = () => async (dispatch) => {
  dispatch({ type: IS_LOADING_USERS, payload: true });
  try {
    const { status, data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (status === 200) {
      dispatch({ type: GET_USERS, payload: data });
      dispatch({ type: IS_LOADING_USERS, payload: false });
    }
  } catch (err) {
    dispatch({ type: IS_LOADING_USERS, payload: false });
    alert(err);
  }
};

export const showNextUsersAC = (payload) => {
  return {
    type: SHOW_NEXT_USERS,
    payload,
  };
};

export const showPrevUsersAC = (payload) => {
  return {
    type: SHOW_PREV_USERS,
    payload,
  };
};

export const filterUsersAC = (payload) => {
  return {
    type: FILTER_USERS_NAME,
    payload,
  };
};
