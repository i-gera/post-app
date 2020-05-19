import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './reducers/posts-reducer';
import usersReducer from './reducers/users-reducer';
import editPostReducer from './reducers/editPost-reducer';
import commentsReducer from './reducers/comments-reducer';


let reducers = combineReducers({
  form: formReducer,
  posts: postsReducer,
  users: usersReducer,
  editPost: editPostReducer,
  comments: commentsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
