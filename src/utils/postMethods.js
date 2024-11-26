import { getToken } from "./authenticationMethods";

export function createPost(title, content) {
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ title: title, content: content }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export function deletePost(postId) {
  console.log("Deleting post");
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export function editPost(postId, title, content) {
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ title: title, content: content }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
