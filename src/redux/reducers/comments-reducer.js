import { commentsAPI } from "./../../api/api";

const SET_COMMENTS = "SET_COMMENTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_COMMENT_SHOWING = "TOGGLE_COMMENT_SHOWING";

let initialState = {
  comments: [],
  isFetching: false,
  isCommentsShowing: false
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_COMMENT_SHOWING:
      return {
        ...state,
        isCommentsShowing: action.isCommentsShowing,
      };
    
    default:
      return state;
  }
};

export default commentsReducer;

//action creators
export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleCommentsShowing = (isCommentsShowing) => {
  return {
    type: TOGGLE_COMMENT_SHOWING,
    isCommentsShowing,
  };
};

//ThunkCreators
export const getCommentsThunk = (postId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await commentsAPI.getComments(postId);
  dispatch(setComments(response.data));
  dispatch(toggleIsFetching(false));
};

