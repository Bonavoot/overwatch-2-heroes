import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <img className="logo" src="src/assets/overwatch-logo.png" alt="logo" />
      <button
        onClick={() => {
          navigate("heroselect");
        }}
        className="enter"
      >
        ENTER
      </button>
    </div>
  );
};

export default Home;
