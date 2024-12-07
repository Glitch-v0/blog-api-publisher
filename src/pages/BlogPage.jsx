import { useState, useEffect } from "react";
import { reloadContext } from "../contexts/reloadContext";
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import AddPost from "../components/AddPost";
import { loadPosts } from "../utils/postMethods";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loadBlogError, setError] = useState(null);

  // Get posts
  useEffect(() => {
    loadPosts(setPosts, setError);
  }, []);

  return (
    <reloadContext.Provider value={loadPosts}>
      <NavBar />
      <header>
        <AddPost loadPosts={loadPosts} setError={setError} />
      </header>

      {loadBlogError ? (
        <h2 className="error">
          Error: {loadBlogError.message || "Failed to load blogs."}
        </h2>
      ) : null}
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
