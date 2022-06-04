import { BsMailbox, BsDoorOpen, BsBoxSeam } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Parallels</Link>
      </div>
      <ul>
        <li>
          <Link to="/chat">
            <BsMailbox />
            Gossip
          </Link>
        </li>
        <li>
          <Link to="/">
            <BsBoxSeam />
            Memory-box
          </Link>
        </li>
        <li>
          <button onClick={onLogout}>
            <BsDoorOpen />
            Exit
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
