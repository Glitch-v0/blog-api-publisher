import { createPost } from "../utils/postMethods";

export default function AddPost({ posts, setPosts }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    createPost(title, body).then(() => {
      setPosts([...posts, { title: title, body: body }]);
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
