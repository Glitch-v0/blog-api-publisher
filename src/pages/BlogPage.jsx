import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import AddPost from "../components/AddPost";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  // Get posts
  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [setPosts]);

  return (
    <>
      <NavBar />
      <header>
        <h1>Here I can see my posts.</h1>
      </header>
      <AddPost />
      {!posts.length ? (
        <h2>Loading...</h2>
      ) : (
        <div className="postContainer">
          {posts.map((post) => (
            <Blog post={post} key={post.id} />
          ))}
        </div>
      )}
    </>
  );
}
