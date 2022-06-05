import axios from "axios";

const API_URL = "/api/posts/";

// Create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);

  return response.data;
};

// Get user posts
const getMyPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// // Get all posts
// const getAllPosts = async () => {
//   const response = await axios.get(API_URL + "all");

//   return response.data;
// };

// update user post
const updatePost = async (postId, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + postId, postData, config);

  return response.data;
};

// Delete user post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + postId, config);

  return response.data;
};

const postService = {
  //   getAllPosts,
  createPost,
  getMyPosts,
  updatePost,
  deletePost,
};

export default postService;
