import {
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
} from "../constants/postContants";

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case USER_POST_REQUEST:
      return { loading: true, posts: [] };
    case USER_POST_SUCCESS:
      return { loading: false, posts: action.payload };
    case USER_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
