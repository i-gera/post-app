import React from "react";
import styles from "./Users.module.css";
import userImg from "../../assets/images/user.png";
import Preloader from "../common/Preloader";

let Users = React.memo((props) => {
  if (props.isFetching) {
    return <Preloader />;
  }
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={styles.blocks}>
            <div className={styles.block1}>
              <div className={styles.userimg}>
                <img src={userImg} alt="img" />
              </div>
            </div>
            <div className={styles.block2}>
              <div>
                <p className={styles.username}>
                  {user.id}. {user.name}
                </p>
                <p className={styles.email}>
                  {user.email != null ? user.email : "without email"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Users;
