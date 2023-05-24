import {
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
} from "../constants/postContants";

import axios from "axios";

export const allPosts = () => async (dispatch) => {
  try {
    dispatch({ type: USER_POST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/");

    dispatch({ type: USER_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
