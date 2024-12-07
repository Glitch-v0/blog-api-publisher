import { getToken } from "./authenticationMethods";

export async function createPost(title, content, setError) {
  try {
    //Check for token first
    if (!getToken()) {
      throw new Error("Must log in to create post.");
    }
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
    await response.json();
    return true;
  } catch (error) {
    setError(error);
    return console.error(error);
  }
}

export async function deletePost(postId, setError) {
  console.log("Deleting post");
  try {
    //Check for token first
    if (!getToken()) {
      throw new Error("Must log in to delete post.");
    }
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
    await response.json();
    return true;
  } catch (error) {
    setError(error);
    return console.error(error);
  }
}

export async function editPost(postId, changes, setError) {
  try {
    //Check for token first
    if (!getToken()) {
      throw new Error("Must log in to edit post.");
    }
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
    await response.json();
    return true;
  } catch (error) {
    setError(error);
    return console.error(error);
  }
}

export async function loadPosts(setPosts, setError) {
  console.log("Loading post");
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts`)
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => setError(error));
}
