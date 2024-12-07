import propTypes from "prop-types";
import { createPost } from "../utils/postMethods";

export default function AddPost({ loadPosts, setError }) {
  AddPost.propTypes = {
    loadPosts: propTypes.func,
    setError: propTypes.func,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    createPost(title, body, setError).then(() => {
      loadPosts();
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create a new post!</h2>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
