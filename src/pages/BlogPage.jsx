import NavBar from "../components/NavBar";
import AddPost from "../components/AddPost";
import toTitleCase from "../utils/stringMethods";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  // Get posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
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
      <div className="postContainer">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{toTitleCase(post.title)}</h2>
            <p className="postBody">&ldquo;{post.body}&rdquo;</p>
            <div className="postDetails">
              <p>Author: {post.userId}</p>
              <p>Date: {post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
