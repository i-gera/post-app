import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const usersAPI = {
  getUsers() {
    return instance.get(`users`).then((response) => {
      return response.data;
    });
  },
};

export const postsAPI = {
  getPosts(currentPage = 1, pageSize = 10) {
    return instance.get(`posts?_page=${currentPage}&_limit=${pageSize}`)
  },

  addPosts(title, body, userId=1) {
    return instance.post(`posts`, 
    { title, body, userId}).then((response) => {
      return response.data;
    });
  },

  getPost(postId) {
    return instance.get(`posts/${postId}`).then ((response) => {
      return response.data})
  },

  updatePost(postId, userId, editTitle, editBody) {
    return instance.put(`posts/${postId}`, {
      id: postId, userId: userId, title: editTitle, body: editBody
    }).then ((response) => {
      return response.data})
  }, 

  deletePost(postId) {
    return instance.delete(`posts/${postId}`)
  } 

};

export const commentsAPI = {
  getComments(postId) {
    return instance.get(`comments?postId=${postId}`)},
};
