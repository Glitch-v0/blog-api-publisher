import propTypes from "prop-types";
import { createComment } from "../utils/postMethods";

export default function AddComment() {
  AddComment.propTypes = {
    loadComments: propTypes.func,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    createComment(title, body).then(() => {
      loadComments();
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create a new comment!</h2>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
