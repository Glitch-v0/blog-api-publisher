export default function LoginForm() {
  return (
    <form
      action={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/login`}
      id="loginForm"
      method="post"
    >
      <h2>Log In</h2>
      <div>
        <label>
          <h3>Email</h3>
          <input type="text" name="email" placeholder="email@address.com" />
        </label>
        <label>
          <h3>Password</h3>
          <input type="text" name="password" placeholder="password" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
