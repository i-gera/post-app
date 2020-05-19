import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./Posts.module.css";
import {
  setCurrentPage,
  getPostsThunk,
  addPostThunk,
  deletePostThunk,
} from "./../../redux/reducers/posts-reducer";
import { toggleUpdatingProgress } from "./../../redux/reducers/editPost-reducer";
import { toggleCommentsShowing } from "./../../redux/reducers/comments-reducer";
import {
  getPosts,
  getPageSize,
  getTotalPostsCount,
  getCurrentPage,
  getIsFetching,
} from "./../../redux/selectors/posts-selectors";
import Posts from "./Posts";
import Paginator from "../common/Paginator";
import PostsReduxForm from "./PostAdd/PostsForm";

const PostsContainer = (props) => {
  debugger;
  useEffect(() => {
    props.getPostsThunk(props.currentPage, props.pageSize);
    props.toggleUpdatingProgress(false);
  }, []);

  //change page
  const paginate = (pageNumber) => {
    props.getPostsThunk(pageNumber, props.pageSize);
  };

  const onSubmit = (formData) => {
    props.addPostThunk(
      formData.postTitle,
      formData.postBody,
      props.currentPage,
      props.pageSize
    );
  };

  return (
    <div className={style.container}>
      <Paginator
        paginate={paginate}
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
      />
      <Posts
        posts={props.posts}
        isFetching={props.isFetching}
        deletePostThunk={props.deletePostThunk}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        toggleCommentsShowing={props.toggleCommentsShowing}
        isCommentsShowing={props.isCommentsShowing}
      />
      <PostsReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    pageSize: getPageSize(state),
    totalCount: getTotalPostsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isCommentsShowing: state.comments.isCommentsShowing,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  getPostsThunk,
  addPostThunk,
  deletePostThunk,
  toggleUpdatingProgress,
  toggleCommentsShowing,
})(PostsContainer);
