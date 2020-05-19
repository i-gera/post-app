import { createSelector } from "reselect";

const getPostsSelector = (state) => {
  return state.posts.posts;
};

export const getPosts = createSelector(getPostsSelector, (posts) => {
  return posts.filter((u) => true);
});

export const getPageSize = (state) => {
  return state.posts.pageSize;
};

export const getTotalPostsCount = (state) => {
  return state.posts.totalPostsCount;
};

export const getCurrentPage = (state) => {
  return state.posts.currentPage;
};

export const getIsFetching = (state) => {
  return state.posts.isFetching;
};

