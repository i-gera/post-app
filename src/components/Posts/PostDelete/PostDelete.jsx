import React, { useState, useEffect } from "react";
import ModalWindow from "../../common/modalWindow";

let PostDelete = (props) => {
  const [modalIsOk, setModalIsOk] = useState(false);
  const modalText = "are you sure, that you want to delete this post?";
  useEffect(() => {
    if (modalIsOk === true) {
      props.deletePostThunk(props.postId, props.currentPage, props.pageSize);
      console.log("deletePost");
    }
  });
  return (
    <div>
      <ModalWindow
        modalText={modalText}
        modalIsOpen={props.modalIsOpen}
        setModalIsOpen={props.setModalIsOpen}
        modalIsOk={modalIsOk}
        setModalIsOk={setModalIsOk}
      />
    </div>
  );
};
export default PostDelete;
