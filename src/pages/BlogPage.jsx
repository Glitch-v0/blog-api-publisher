import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import AddPost from "../components/AddPost";
import toTitleCase from "../utils/stringMethods";
import formatDate from "../utils/formatDate";
import IconContainer from "../components/IconContainer";

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
      <div className="postContainer">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <a href=""></a>
            <h2>{toTitleCase(post.title)}</h2>
            <p className="postBody">
              <i>&ldquo;{post.content}&rdquo;</i>
            </p>
            <div className="postDetails">
              <p>Date: {formatDate(post.date)}</p>
              <IconContainer postId={post.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}