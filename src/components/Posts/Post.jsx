import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import userImg from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Comments from "../Comments/Comments";

let Post = (props) => {
  const [showComments, setShowComments] = useState(false);
  const showCommentClick = () => {
    setShowComments(true);
  };
  const hideCommentClick = () => {
    setShowComments(false);
  };

  return (
    <div>
      <div className={styles.blocks}>
        <div className={styles.block1}>
          <div className={styles.userimg}>
            <img src={userImg} alt="img" />
          </div>
        </div>
        <div className={styles.block2}>
          <div>
            <div>
              <span className={styles.title}>
                {props.post.id}. {props.post.title}
              </span>
              <NavLink to={"/post/" + props.post.id}>
                <button className={styles.editBtn}>Edit</button>
              </NavLink>
              <button className={styles.deleteBtn} onClick={props.deletePost}>
                Delete
              </button>
            </div>
            <div>
              <p className={styles.body}>
                {props.post.body != null ? props.post.body : "without text"}
              </p>
            </div>
            <div>
              {!showComments && (
                <button onClick={showCommentClick}>Show comments</button>
              )}
              {showComments && (
                <button onClick={hideCommentClick}>Hide comments</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Comments
        postId={props.post.id}
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </div>
  );
};
export default Post;
