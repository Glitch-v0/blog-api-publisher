import { useState } from "react";
import PropTypes from "prop-types";
import { toTitleCase, formatDate } from "../utils/stringMethods";
import IconContainer from "../components/IconContainer";
import { editPost } from "../utils/postMethods";

export default function Blog({ post }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(toTitleCase(post.title));
  const [content, setContent] = useState(post.content);
  const [published, setPublished] = useState(post.published);

  Blog.propTypes = {
    post: PropTypes.object,
  };

  const saveEdit = () => {
    // Add logic to save the updated content (e.g., via an API call)
    editPost(post.id, { title: title, content: content });
    console.log("Saving updated content:", content);
    setEditing(false); // Exit editing mode
  };

  console.log(post);
  return (
    <div className="post">
      <a href=""></a>

      {editing ? (
        <div className="postBody">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="titleEditor"
            />
          </label>
          <label htmlFor="content">
            Content
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="contentEditor"
            />
          </label>
        </div>
      ) : (
        <div className="postBody">
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
        />
        <a href={`blog/${post.id}`}>
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
