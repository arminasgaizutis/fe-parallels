import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
        <p>Please login</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="*Enter your email"
            onChange={onChange}
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="*Enter your password"
            onChange={onChange}
          />
          <br />
          <button type="submit">Submit</button>

          <Link to="/register"> ...Register</Link>
        </form>
      </section>
    </>
  );
}

export default Login;
