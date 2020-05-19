import { postsAPI } from "./../../api/api";

const SET_POSTS = "SET_POSTS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_POSTS = "SET_TOTAL_POSTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const ADD_POST = "ADD_POST";
const CONFIRM_POST_DELETING = "CONFIRM_POST_DELETING";


let initialState = {
  posts: [],
  pageSize: 3,
  totalPostsCount: 0,
  currentPage: 1,
  isFetching: false,
  isConfirmed: false
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case SET_TOTAL_POSTS:
      return {
        ...state,
        totalPostsCount: action.count,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case CONFIRM_POST_DELETING:
      return {
        ...state,
        isConfirmed: action.isConfirmed,
      };

    default:
      return state;
  }
};

export default postsReducer;

//action creators
export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const addPost = (userId, id, title, body) => {
  return {
    type: ADD_POST,
    payload: {
      userId,
      id,
      title,
      body,
    },
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_PAGE,
    pageNumber,
  };
};

export const setTotalPostsCount = (count) => {
  return {
    type: SET_TOTAL_POSTS,
    count,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const confirmPostDeleting = (isConfirmed) => {
  return {
    type: CONFIRM_POST_DELETING,
    isConfirmed,
  };
};

//ThunkCreators
export const getPostsThunk = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(pageNumber));

  const response = await postsAPI.getPosts(pageNumber, pageSize);
  dispatch(setPosts(response.data));
  dispatch(setTotalPostsCount(response.headers["x-total-count"]));
  dispatch(toggleIsFetching(false));
};

export const addPostThunk = (newTitle, newBody, pageNumber, pageSize, userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  const data = await postsAPI.addPosts(newTitle, newBody, userId);
  dispatch(addPost(data.userId, data.id, newTitle, newBody));
  dispatch(getPostsThunk(pageNumber, pageSize));
  dispatch(toggleIsFetching(false));
};

export const deletePostThunk = (postId, pageNumber, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await postsAPI.deletePost(postId);
  console.log(response);
  dispatch(getPostsThunk(pageNumber, pageSize));
  dispatch(toggleIsFetching(false));
  dispatch(confirmPostDeleting(false));
};
