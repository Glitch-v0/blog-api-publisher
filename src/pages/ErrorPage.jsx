import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <NavBar />
      <h1 className="error">{error.statusText || error.message}</h1>
      <h2>
        Whoopsies! You can&apos;t see my blog from this page. Try using a link
        at the top.
      </h2>
    </>
  );
}
