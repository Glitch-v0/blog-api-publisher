import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import editIcon from "../assets/ic--baseline-edit.svg";
import deleteIcon from "../assets/ic--round-delete.svg";
import {
  editComment,
  deleteComment,
  loadComments,
} from "../utils/commentMethods";

export default function CommentIconContainer({
  commentId,
  setComments,
  setPost,
}) {
  const [editing, setEditing] = useState(false);
  const [commentError, setError] = useState(null);

  const { postId } = useParams();

  CommentIconContainer.propTypes = {
    commentId: PropTypes.string.isRequired,
    setComments: PropTypes.func.isRequired,
    setPost: PropTypes.func.isRequired,
  };

  const handleDelete = async () => {
    console.log({ commentId });
    await deleteComment(commentId, postId)
      .then(() => loadComments(postId, setComments, setPost, setError))
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="commentIconContainer">
      {commentError && <p className="error">{commentError.message}</p>}
      <button onClick={() => handleDelete()} title="Delete Post">
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
}
