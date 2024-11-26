import editIcon from "../assets/ic--baseline-edit.svg";
import deleteIcon from "../assets/ic--round-delete.svg";
import { editPost, deletePost } from "../utils/postMethods";

export default function IconContainer(postId) {
  return (
    <div className="iconContainer">
      <button onClick={() => editPost(postId)} title="Edit Post">
        <img src={editIcon} alt="edit icon" />
      </button>
      <button onClick={() => deletePost(postId)} title="Delete Post">
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  );
}
