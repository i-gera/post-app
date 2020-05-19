import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsersThunk,
} from "./../../redux/reducers/users-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
} from "./../../redux/selectors/users-selectors";
import Users from "./Users";
import Paginator from "./../common/Paginator";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsersThunk(props.currentPage);
  }, []);

  //Get current posts
  let indexOfLastUser = props.currentPage * props.pageSize;
  let indexOfFirstUser = indexOfLastUser - props.pageSize;
  let currentUsers = props.users.slice(indexOfFirstUser, indexOfLastUser);

  //change page
  const paginate = (pageNumber) => {
    props.getUsersThunk(pageNumber);
  };

  return (
    <div>
      <Paginator
        paginate={paginate}
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
      />
      <Users users={currentUsers} isFetching={props.isFetching} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunk,
})(UsersContainer);
