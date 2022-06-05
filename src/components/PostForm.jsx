import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/postSlice";

const PostForm = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ text, img }));
    setText("");
    setImg("");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Your post</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="url"
            name="img"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default PostForm;
