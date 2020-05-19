import {
	postsAPI
} from '../../api/api';

const SET_EDIT_POST = 'SET_EDIT_POST';
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_UPDATING_PROGRESS = "TOGGLE_UPDATING_PROGRESS";


let initialState = {
        id: null, 
        userId: null, 
        title: "", 
        body: "", 
		isFetching: false,
        isUpdated: false

};

const editPostReducer = (state = initialState, action) => {
	switch (action.type) {

		case (SET_EDIT_POST):
			return {
				...state, 
                ...action.payload
			};
		case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_UPDATING_PROGRESS:
            return {
                ...state,
                isUpdated: action.isUpdated,
            };

		default:
			return state;
	}
}

export default editPostReducer;


//action creators
export const setEditPost = (id, userId, title, body) => {
	return {
		type: SET_EDIT_POST,
		payload: {id, userId, title, body}
	};
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleUpdatingProgress = (isUpdated) => {
    return {
        type: TOGGLE_UPDATING_PROGRESS,
        isUpdated
    }
}

//thunk creators
export const getEditPost = (postId) => async(dispatch) => {
    dispatch(toggleIsFetching(true));

    const data = await postsAPI.getPost(postId);
    dispatch(setEditPost( data.id, data.userId, data.title, data.body));
    dispatch(toggleIsFetching(false));
}

export const updateEditPost = (postId, userId, editTitle, editBody) => async(dispatch) => {
  dispatch(toggleIsFetching(true));
	const data = await postsAPI.updatePost(postId, userId, editTitle, editBody); 
	dispatch(setEditPost(data.id, data.userId, data.title, data.body));
    dispatch(toggleIsFetching(false));
    dispatch(toggleUpdatingProgress(true));

}

