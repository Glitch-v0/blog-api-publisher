import { toTitleCase, formatDate } from "../utils/stringMethods";
import IconContainer from "../components/IconContainer";

export default function Blog({ post }) {
  console.log(post);
  return (
    <div className="post">
      <a href=""></a>
      <h2>{toTitleCase(post.title)}</h2>
      <p className="postBody">
        <i>&ldquo;{post.content}&rdquo;</i>
      </p>
      <div className="postDetails">
        <p>Date: {formatDate(post.date)}</p>
        <IconContainer postId={post.id} />
      </div>
    </div>
  );
}
