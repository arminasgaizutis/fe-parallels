import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./../components/Header";

const Memorybox = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Memorybox</h1>
      <Header></Header>
    </div>
  );
};

export default Memorybox;
