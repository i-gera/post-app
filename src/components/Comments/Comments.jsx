import React, { useEffect } from "react";
import Preloader from "../common/Preloader";
import Comment from "./Comment";
import { getCommentsThunk } from "./../../redux/reducers/comments-reducer";
import { connect } from "react-redux";

let Comments = (props) => {
  useEffect(() => {
    if (props.showComments === true) {
      props.getCommentsThunk(props.postId);
    }
  }, [props]);

  if (props.isFetching) {
    return <Preloader />;
  }
  return (
    <div>
      {props.comments.map(
        (comment) =>
          props.postId === comment.postId && (
            <Comment key={comment.id} comment={comment} />
          )
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
  };
};

export default connect(mapStateToProps, {
  getCommentsThunk,
})(Comments);

// export default Comments;
