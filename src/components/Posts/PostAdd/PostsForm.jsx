import React from "react";
import style from "./PostsForm.module.css";
import { Field, reduxForm } from "redux-form";

const PostsForm = (props) => {
  return (
    <div className={style.formBlock}>
      <form onSubmit={props.handleSubmit}>
        <div className={style.newPostTitle}>
          <Field
            component="input"
            name="postTitle"
            placeholder="new post title..."
          />
        </div>
        <div className={style.newPostBody}>
          <Field
            component="textarea"
            name="postBody"
            placeholder="new post body..."
          />
        </div>
        <div className={style.newPostButton}>
          <button>Add post</button>
        </div>
      </form>
    </div>
  );
};

const PostsReduxForm = reduxForm({ form: "newPost" })(PostsForm);
export default PostsReduxForm;
