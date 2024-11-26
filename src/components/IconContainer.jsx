import { useContext } from "react";
import { reloadContext } from "../contexts/reloadContext";
import PropTypes from "prop-types";
import editIcon from "../assets/ic--baseline-edit.svg";
import deleteIcon from "../assets/ic--round-delete.svg";
import { deletePost } from "../utils/postMethods";

export default function IconContainer({
  postId,
  editing,
  setEditing,
  saveEdit,
}) {
  IconContainer.propTypes = {
    postId: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired,
    setEditing: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired,
  };

  const reloadPosts = useContext(reloadContext);

  const handleDelete = () => {
    deletePost(postId).then(reloadPosts);
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
        </>
      )}
    </div>
  );
}
