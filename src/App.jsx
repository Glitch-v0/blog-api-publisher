import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authContext } from "./contexts/authContext.js";
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
    <authContext.Provider value={{ token, updateToken }}>
      <RouterProvider router={router} />
    </authContext.Provider>
  );
}

export default App;
