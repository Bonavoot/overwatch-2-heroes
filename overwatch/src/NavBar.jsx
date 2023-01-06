import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <button className="home-btn" onClick={() => navigate("/")}>
        HOME
      </button>
      <button className="home-btn" onClick={() => navigate("/")}>
        HEROES
      </button>
    </div>
  );
};
