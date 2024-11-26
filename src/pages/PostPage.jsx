import { useState, useEffect } from "react";
import { reloadContext } from "../contexts/reloadContext";
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import AddPost from "../components/AddPost";

export default function PostPage() {
  const [comments, setComments] = useState([]);

  // const loadPosts = () => {
  //   console.log("Loading posts");
  //   fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts`)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data));
  // };

  // Get posts
  // useEffect(() => {
  //   loadPosts();
  // }, []);

  return (
    <div>
      <NavBar />
      <header>
        <h1>Comments</h1>
      </header>
      <AddComment loadPosts={loadPosts} />
      {!comments.length ? (
        <h2>Loading...</h2>
      ) : (
        <div className="postContainer">
          {posts.map((post) => (
            <Blog post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
}
