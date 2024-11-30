import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reloadContext } from "../contexts/reloadContext";
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import AddPost from "../components/AddPost";
import upvoteIcon from "../assets/bxs--upvote.svg";
import downvoteIcon from "../assets/bxs--downvote.svg";

export default function PostPage() {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [loadPostError, setError] = useState(null);

  const loadComments = () => {
    fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts/${postId}/comments`
    )
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => {
        console.error(error);
        setTimeout(() => setError(error), 1000); // Delay error display by 1 second
      });
  };

  //Get comments
  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div>
      <NavBar />
      <header>
        <h1>Comments</h1>
      </header>
      {/* <AddComment loadPosts={loadPosts} /> */}
      {loadPostError ? (
        <h2>Error: {loadPostError.message || "Failed to load."}</h2>
      ) : !comments.length ? (
        <h2>Loading...</h2>
      ) : (
        <div className="commentsContainer">
          {comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <p>{comment.content}</p>
              <div className="votes">
                <img src={upvoteIcon} alt="upvote" title="upvote" />
                <img src={downvoteIcon} alt="downvote" title="downvote" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
