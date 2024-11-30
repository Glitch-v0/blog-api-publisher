import { getToken } from "./authenticationMethods";

export function loadComments(postId, setComments, setPost, setError) {
  fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      setComments(data.comments);
      const post = {
        title: data.title,
        content: data.content,
        id: data.id,
        date: data.date,
      };
      setPost(post);
    })
    .catch((error) => {
      console.error(error);
      setTimeout(() => setError(error), 1000); // Delay error display by 1 second
    });
}

export async function createComment(postId, title, content) {
  console.log("Creating comment");
  try {
    //Check for token first
    if (!getToken()) {
      throw new Error("Must log in to create comment.");
    }

    await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ title: title, content: content }),
      }
    )
      .then((response) => response.json())
      .finally(() => {
        return true;
      });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
