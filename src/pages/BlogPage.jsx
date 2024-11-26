import { useState, useEffect } from "react";
import { reloadContext } from "../contexts/reloadContext";
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import AddPost from "../components/AddPost";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    console.log("Loading posts");
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  // Get posts
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <reloadContext.Provider value={loadPosts}>
      <NavBar />
      <header>
        <h1>Here I can see my posts.</h1>
      </header>
      <AddPost loadPosts={loadPosts} />
      {!posts.length ? (
        <h2>Loading...</h2>
      ) : (
        <div className="postContainer">
          {posts.map((post) => (
            <Blog post={post} key={post.id} />
          ))}
        </div>
      )}
    </reloadContext.Provider>
  );
}
