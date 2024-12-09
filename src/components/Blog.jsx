import { useState } from "react";
import PropTypes from "prop-types";
import { toTitleCase, formatDate } from "../utils/stringMethods";
import IconContainer from "../components/IconContainer";
import { editPost } from "../utils/postMethods";

export default function Blog({ post, setPosts }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(toTitleCase(post.title));
  const [content, setContent] = useState(post.content);
  const [published, setPublished] = useState(post.published);
  const [blogError, setError] = useState(null);

  Blog.propTypes = {
    post: PropTypes.object,
    setPosts: PropTypes.func,
  };

  const saveEdit = () => {
    editPost(post.id, { title: title, content: content }, setError);
    setEditing(false); // Exit editing mode
  };
  return (
    <div className="post">
      <a href=""></a>

      {editing ? (
        <div className="postBody">
          <label htmlFor="title">
            <h2>Title:</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="titleEditor"
            />
          </label>
          <label htmlFor="content">
            <h2>Content:</h2>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="contentEditor"
            />
          </label>
        </div>
      ) : (
        <div className="postBody">
          {blogError ? (
            <h2 className="error">Error: {blogError.message}</h2>
          ) : null}
          <h2>{title}</h2>
          <p>
            <i>&ldquo;{content}&rdquo;</i>
          </p>
        </div>
      )}

      <div className="postDetails">
        <p>Date: {formatDate(post.date)}</p>
        <IconContainer
          postId={post.id}
          editing={editing}
          saveEdit={saveEdit}
          setEditing={setEditing}
          published={published}
          setPublished={setPublished}
          setError={setError}
          setPosts={setPosts}
        />
        <a href={`blog/${post.id}`} title="View comments">
          {post.comments.length === 0
            ? "No comments"
            : `${post.comments} ${
                post.comments === 1 ? "Comment" : "Comments"
              }`}
        </a>
      </div>
    </div>
  );
}
