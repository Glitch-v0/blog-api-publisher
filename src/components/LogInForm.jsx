import { useState } from "react";
import { logIn } from "../utils/authenticationMethods";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <form
      action={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/login`}
      id="loginForm"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        logIn(email, password, navigate);
      }}
    >
      <h2>Log In</h2>
      <div>
        <label>
          <h3>Email</h3>
          <input
            type="text"
            name="email"
            placeholder="email@address.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <h3>Password</h3>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
