import React, { useState, useEffect } from "react";
import Preloader from "../common/Preloader";
import PostDelete from "./PostDelete/PostDelete";
import style from "./Posts.module.css";

import Post from "./Post";

let Posts = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (props.isFetching) {
    return <Preloader />;
  }

  const deletePost = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      {props.posts.map((post) => (
        <div className={style.post}>
          <Post
            key={post.id}
            post={post}
            currentPage={props.currentPage}
            pageSize={props.pageSize}
            deletePost={deletePost}
            isCommentsShowing={props.isCommentsShowing}
            toggleCommentsShowing={props.toggleCommentsShowing}
          />
          <PostDelete
            deletePostThunk={props.deletePostThunk}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            postId={post.id}
            currentPage={props.currentPage}
            pageSize={props.pageSize}
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
