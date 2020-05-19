import { usersAPI } from './../../api/api';

const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:            
            return {
                ...state,
                users: action.users
            };
        
        case SET_PAGE:            
            return {
                ...state,
                currentPage: action.pageNumber
            };

        case SET_TOTAL_USERS:            
            return {    
                ...state,
                totalUsersCount: action.count
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };

        default:
            return state;
    }
}

export default usersReducer;

//action creators
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_PAGE,
        pageNumber
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS,
        count: 10
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

//ThunkCreators

export const getUsersThunk = (pageNumber) => async(dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));

    const data = await usersAPI.getUsers();
    dispatch(setUsers(data));
    dispatch(setTotalUsersCount(data["x-total-count"]));
    dispatch(toggleIsFetching(false));
}