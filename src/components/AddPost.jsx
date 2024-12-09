import propTypes from "prop-types";
import { loadPosts, createPost } from "../utils/postMethods";

export default function AddPost({ setError, setPosts }) {
  AddPost.propTypes = {
    setError: propTypes.func,
    setPosts: propTypes.func,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    createPost(title, body, setError).then(() => {
      loadPosts(setPosts, setError);
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
