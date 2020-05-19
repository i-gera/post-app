import React from "react";
import styles from "./Comments.module.css";
// import userImg from "../../assets/images/user.png";

let Comment = ({ comment }) => {
  return (
    <div className={styles.blocks}>
      <div className={styles.block1}>
        {/* <div className={styles.userimg}>
          <img src={userImg} alt="img" />
        </div> */}
      </div>
      <div className={styles.block2}>
        <div>
          <div>
            <span className={styles.title}>
              {comment.id}. {comment.email}
            </span>
          </div>
          <div>
            <p className={styles.body}>
              {comment.body != null ? comment.body : "without text"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
