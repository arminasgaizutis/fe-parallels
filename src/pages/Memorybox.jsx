import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
import Spinner from "../components/Spinner";
import { getMyPosts, reset } from "../features/posts/postSlice";

const Memorybox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getMyPosts());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Memorybox</h1>
      <Header></Header>

      <PostForm />

      <section>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <h3> You have no posts yet</h3>
        )}
      </section>
    </div>
  );
};

export default Memorybox;
