import { useContext } from "react";
import { reloadContext } from "../contexts/reloadContext";
import PropTypes from "prop-types";
import editIcon from "../assets/ic--baseline-edit.svg";
import deleteIcon from "../assets/ic--round-delete.svg";
import publishIcon from "../assets/fluent-mdl2--publish-content.svg";
import unpublishIcon from "../assets/fluent-mdl2--unpublish-content.svg";
import { editPost, deletePost } from "../utils/postMethods";

export default function IconContainer({
  postId,
  editing,
  setEditing,
  saveEdit,
  published,
  setPublished,
  setError,
}) {
  IconContainer.propTypes = {
    postId: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired,
    setEditing: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired,
    published: PropTypes.bool.isRequired,
    setPublished: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  };

  // Allows reloading posts
  const reloadPosts = useContext(reloadContext);

  const handleDelete = () => {
    deletePost(postId, setError).then(reloadPosts);
  };

  const togglePublish = () => {
    editPost(postId, { published: !published }, setError).then(
      setPublished(!published)
    );
  };

  return (
    <div className="iconContainer">
      {editing ? (
        <>
          <button onClick={saveEdit} title="Save Changes">
            Save
          </button>
          <button onClick={() => setEditing(false)} title="Cancel Editing">
            Cancel
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setEditing(true)} title="Edit Post">
            <img src={editIcon} alt="edit icon" />
          </button>
          <button onClick={() => handleDelete()} title="Delete Post">
            <img src={deleteIcon} alt="delete icon" />
          </button>
          {published ? (
            <button onClick={() => togglePublish()} title="Unpublish Post">
              <img src={unpublishIcon} alt="unpublish icon" />
            </button>
          ) : (
            <button onClick={() => togglePublish()} title="Publish Post">
              <img src={publishIcon} alt="publish icon" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
