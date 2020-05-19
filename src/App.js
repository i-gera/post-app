import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import PostsContainer from "./components/Posts/PostsContainer";
import PostEditContainer from "./components/Posts/PostEdit/PostEditContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <div className="App-content">
        <Route path="/posts" render={() => <PostsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/post/:id?" render={() => <PostEditContainer />} />
      </div>
    </div>
  );
};

export default withRouter(App);
