import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authContext } from "./contexts/authContext.js";
import ErrorPage from "./pages/ErrorPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import EntryPage from "./pages/EntryPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/:postId",
    element: <PostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
]);

function App() {
  const [token, updateToken] = useState("");

  return (
    <authContext.Provider value={{ token, updateToken }}>
      <RouterProvider router={router} />
    </authContext.Provider>
  );
}

export default App;
