import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Preloader from "../../common/Preloader";
import PostEditReduxForm from "./PostEditForm";
import {
  getEditPost,
  updateEditPost,
  setEditPost,
} from "../../../redux/reducers/editPost-reducer";

const PostEditContainer = (props) => {
  useEffect(() => {
    let postId = props.match.params.id;
    if (!postId) {
      this.props.history.push("/post/" + props.postId);
    }
    props.getEditPost(postId);
  }, []);

  if (props.isFetching) {
    return <Preloader />;
  }

  let changePost = (value) => {
    props.updateEditPost(
      props.postId,
      props.userId,
      value.postEditTitle,
      value.postEditBody
    );
  };

  if (props.isUpdated) {
    return <Redirect to="/posts" />;
  }

  return <PostEditReduxForm onSubmit={changePost} {...props} />;
};

let mapStateToProps = (state) => {
  return {
    postId: state.editPost.id,
    userId: state.editPost.userId,
    editTitle: state.editPost.title,
    editBody: state.editPost.body,
    isFetching: state.editPost.isFetching,
    isUpdated: state.editPost.isUpdated,
    initialValues: {
      postEditTitle: state.editPost.title,
      postEditBody: state.editPost.body,
    },
  };
};

export default compose(
  connect(mapStateToProps, {
    getEditPost,
    updateEditPost,
    setEditPost,
  }),
  withRouter
)(PostEditContainer);
