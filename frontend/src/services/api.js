import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts", data);
export const likePost = (id) => API.post(`/posts/${id}/like`);
export const fetchComments = (id) => API.get(`/posts/${id}/comments`);
export const addComment = (id,data) => API.post(`/posts/${id}/comment`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);


