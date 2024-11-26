import { getToken } from "./authenticationMethods";

export async function createPost(title, content) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ title: title, content: content }),
      }
    );
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    return console.error(error);
  }
}

export async function deletePost(postId) {
  console.log("Deleting post");
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    return console.error(error);
  }
}

export async function editPost(postId, changes) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(changes),
      }
    );
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    return console.error(error);
  }
}
