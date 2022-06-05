import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

function PostItem({ post }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>{new Date(post.createdAt).toLocaleString("en-US")}</div>
      <h2>{post.text}</h2>
      <img src={post.img} alt="" />
      <button onClick={() => dispatch(deletePost(post._id))} className="close">
        X
      </button>
    </>
  );
}
export default PostItem;
