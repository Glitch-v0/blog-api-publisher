import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import ErrorPage from "./pages/ErrorPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EntryPage from "./pages/EntryPage.jsx";

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
    path: "/contact",
    element: <ContactPage />,
  },
]);

function App() {
  const [token, updateToken] = useState("");

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
