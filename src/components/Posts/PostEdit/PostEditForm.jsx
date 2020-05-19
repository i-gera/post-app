import React from "react";
import style from "./PostEditForm.module.css";
import { Field, reduxForm } from "redux-form";

const PostEditForm = (props) => {
  return (
    <div className={style.editFormBlock}>
      <h1 className={style.title}>Edit Post</h1>
      <form onSubmit={props.handleSubmit}>
        <div className={style.newPostTitle}>
          <Field component="input" name="postEditTitle" />
        </div>
        <div className={style.newPostBody}>
          <Field component="textarea" name="postEditBody" />
        </div>
        <div className={style.newPostButton}>
          <button>Update post</button>
        </div>
      </form>
    </div>
  );
};

const PostEditReduxForm = reduxForm({
  form: "editPost",
})(PostEditForm);

export default PostEditReduxForm;
