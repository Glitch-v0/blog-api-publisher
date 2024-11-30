export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export async function register(email, username, password) {
  console.log("Trying to log in");
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      }
    );
    if (!response.ok) {
      // Extract error message if available
      const errorData = await response.json();
      console.log("Error from backend:", errorData);
      throw new Error(errorData.msg || "Registration failed");
    }

    return true;
  } catch (error) {
    console.log("Did not log in");
    throw error;
  }
}

export async function logIn(email, password, navigate) {
  console.log("Trying to log in");
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    if (!response.ok) {
      // Extract error message if available
      const errorData = await response.json();
      console.log("Error from backend:", errorData);
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    saveToken(data.token);
    navigate("/blog");
    return console.log(data);
  } catch (error) {
    console.log("Did not log in");
    throw error;
  }
}
