export default function AddPost() {
  return (
    <div>
      <form action="/blog">
        <h2>Create a new post!</h2>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
