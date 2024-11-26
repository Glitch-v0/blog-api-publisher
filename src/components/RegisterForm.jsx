export default function RegisterForm() {
  return (
    <form
      action={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/register`}
      id="registerForm"
    >
      <h2>Register</h2>
      <div>
        <label>
          <h3>Email</h3>
          <input type="text" name="email" placeholder="email@address.com" />
        </label>
        <label>
          <h3>Username</h3>
          <input type="text" name="text" placeholder="username" />
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
