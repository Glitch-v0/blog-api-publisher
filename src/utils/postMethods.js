export function deletePost(postId) {
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export function editPost(postId) {
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`, {
    method: "PUT",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
